import authModel from "../Database/models/AuthModels.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import otpTemplate from "../utils/otpTemplate.js";
import otpModel from "../Database/models/OtpModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const SignupControllers = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const profileImage = req.file?.path;

    if (!firstname || !lastname || !email || !password || !profileImage) {
      return res
        .status(400)
        .send({ success: false, message: "all fields required" });
    }
    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ success: false, message: "user already exist" });
    }
    const otp = crypto.randomInt(100000, 1000000).toString();
    const expireOtp = new Date(Date.now() + 10 * 60 * 1000);
    await sendEmail(
      email,
      "Verify Your Email – Signup OTP",
      otpTemplate(firstname, otp),
    );
    await otpModel.create({
      email: email,
      otp: otp,
      expireAt: expireOtp,
      purpose: "signup",
    });
    const newUser = await authModel.create({
      firstname,
      lastname,
      email,
      password,
      profile: profileImage,
    });
    return res
      .status(200)
      .send({
        success: true,
        message: "user registered successfully, otp sent to via email",
        user: {
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          email: newUser.email,
          profile: newUser.profile,
          isVerified: newUser.isVerified,
        },
      });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const VerifySignupControllers = async (req, res) => {
  try {
    const { email, otp, purpose } = req.body;
    if (!email || !otp || !purpose) {
      return res
        .status(400)
        .send({ success: false, message: "all fields required" });
    }
    const userRecord = await otpModel.findOne({ email });
    if (!userRecord) {
      return res
        .status(404)
        .send({ success: false, message: "user not found!" });
    }
    if (userRecord.otp !== otp || userRecord.purpose !== purpose) {
      return res
        .status(400)
        .send({ success: false, message: "invalid otp or purpose" });
    }
    if (Date.now() > userRecord.expireAt) {
      await otpModel.deleteOne({ _id: userRecord._id });
      return res.status(400).send({ success: false, message: "otp expired" });
    }

    const user = await authModel.findOneAndUpdate(
      { email },
      { isVerified: true },
      { new: true },
    );

    await otpModel.deleteOne({ _id: userRecord._id });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "user not found" });
    }

    return res
      .status(200)
      .send({
        success: true,
        message: "otp verified successfully",
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          profile: user.profile,
          isVerified: user.isVerified,
        },
      });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }

    // Find user
    const foundUser = await authModel.findOne({ email });
    if (!foundUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Check if already verified
    if (foundUser.isVerified) {
      return res.status(400).send({
        success: false,
        message: "User already verified",
      });
    }

    // Generate new OTP
    const newOtp = crypto.randomInt(100000, 1000000).toString();
    const newOtpExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Update or create OTP document
    await otpModel.findOneAndUpdate(
      { email },
      {
        otp: newOtp,
        expireAt: newOtpExpire,
        purpose: "signup",
      },
      {
        upsert: true, // Create if doesn't exist
        new: true, // Return updated document
      },
    );

    // Send email
    await sendEmail(
      email,
      "Resend OTP - Verification Code",
      otpTemplate(foundUser.firstname, newOtp),
    );

    return res.status(200).send({
      success: true,
      message: "OTP resent successfully. Please check your email.",
    });
  } catch (error) {
    console.error("Resend OTP Error:", error);
    return res.status(500).send({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const LoginControllers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "all fields required" });
    }
    const foundUser = await authModel.findOne({ email });
    if (!foundUser) {
      return res
        .status(404)
        .send({ success: false, message: "user not found" });
    }
    if (!foundUser.isVerified) {
      return res
        .status(400)
        .send({
          success: false,
          message: "user is not verified, please verify yourself",
        });
    }
    const credentialCheck = await bcrypt.compare(password, foundUser.password);
    if (!credentialCheck) {
      return res
        .status(400)
        .send({ success: false, message: "invalid credentials" });
    }
    const token = jwt.sign(
      { _id: foundUser._id, email: foundUser.email, role: foundUser.role },
      process.env.SECRET_KEY,
      { expiresIn: "10m" },
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
      secure: true,
      sameSite: "none",
    });
    return res
      .status(200)
      .send({
        success: true,
        message: "user logged in successfully",
        user: {
          firstname: foundUser.firstname,
          lastname: foundUser.lastname,
          email: foundUser.email,
          profile: foundUser.profile
        },
      });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const getMeControlller = async (req, res) =>{
  try {
    const token = req.cookies.token;
    if(!token){
      return res.status(200).send({success: true, loggedIn: false})
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await authModel.findById(decoded._id).select("-password");
    if(!user){
      return res.status(200).send({success: true, loggedIn: false})
    }
    return res.status(200).send({success: true, loggedIn: true, user})
  } catch (error) {
    return res.status(500).send({success: false, loggedIn: false, message: error.message})
  }
}

export const LogoutControllers = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0)
    })
    return res
      .status(200)
      .send({ success: true, message: "user logout successfully" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const ForgotPassControllers = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "email is required" });
    }
    const foundUser = await authModel.findOne({ email });
    if (!foundUser) {
      return res
        .status(404)
        .send({ success: false, message: "user not found!" });
    }
    const otp = crypto.randomInt(100000, 1000000).toString();
    const otpExpire = new Date(Date.now() + 10 * 60 * 1000);
    await sendEmail(
      email,
      "Verify Your Email – Forgot Password OTP",
      otpTemplate(foundUser.firstname, otp),
    );
    await otpModel.create({
      email,
      otp: otp,
      expireAt: otpExpire,
      purpose: "forgot_password",
    });
    return res
      .status(200)
      .send({
        success: true,
        message: "otp sent to via email",
        user: { email: email },
      });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const VerifyForgotPassControllers = async (req, res) => {
  try {
    const { email, otp, purpose } = req.body;
    if (!email || !otp || !purpose) {
      return res
        .status(400)
        .send({ success: false, message: "all fields required" });
    }
    const userRecord = await otpModel.findOne({ email });
    if (!userRecord) {
      return res
        .status(404)
        .send({ success: false, message: "user not found!" });
    }
    if (userRecord.otp !== otp || userRecord.purpose !== purpose) {
      return res
        .status(400)
        .send({ success: false, message: "invalid otp or purpose" });
    }
    if (userRecord.expireAt < Date.now()) {
      return res.status(400).send({ success: false, message: "otp expired" });
      await otpModel.deleteOne({ _id: userRecord._id });
    }
    await otpModel.deleteOne({ _id: userRecord._id });
    return res
      .status(200)
      .send({ success: true, message: "otp verified successfully" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const ResetPassControllers = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res
        .status(400)
        .send({ success: false, message: "all fields required" });
    }
    const userFound = await authModel.findOne({ email });
    if (!userFound) {
      return res
        .status(404)
        .send({ success: false, message: "user not found!" });
    }
    userFound.password = newPassword;
    await userFound.save();
    return res
      .status(200)
      .send({
        success: true,
        message: "reset password successfully",
        user: {
          firstname: userFound.firstname,
          lastname: userFound.lastname,
          password: userFound.password,
          profile: userFound.profile,
        },
      });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
