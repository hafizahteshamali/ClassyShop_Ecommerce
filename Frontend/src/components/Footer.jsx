import { NavLink } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import { footerData } from "../assets/ConstantData";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialData = [
  {
    icon: <FaFacebookF />,
    link: "/",
  },
  {
    icon: <CiYoutube />,
    link: "/",
  },
  {
    icon: <FaPinterestP />,
    link: "/",
  },
  {
    icon: <FaInstagram />,
    link: "/",
  },
];

const imgUrl = [
  "/assets/images/carte_bleue.png",
  "/assets/images/visa.png",
  "/assets/images/master_card.png",
  "/assets/images/american_express.png",
  "/assets/images/paypal.png",
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-[10px] justify-center p-2">
        <div className="flex flex-col lg:w-[23%] md:w-[33%] sm:w-[48%] w-[100%] justify-center items-center md:items-start text-center sm:text-left gap-2 p-2">
          <h3 className="text-2xl font-semibold">Contact us</h3>
          <p className="text-[13px] text-gray-500">
            Classyshop - Mega Super Store 507-Union Trade Centre France
          </p>

          <NavLink className="text-[13px] text-gray-500" to="/">
            sales@yourcompany.com
          </NavLink>
          <h2 className="text-[13px] text-gray-500">+92 3308419436</h2>
          <div className="flex items-center gap-3">
            <FaRegMessage className="text-4xl text-[#ff5252]" />
            <span className="font-semibold text-gray-500">
              Online Chat Get Expert Help
            </span>
          </div>
        </div>

        {footerData.map((item, index) => {
          return (
            <ul
              key={index}
              className="flex flex-col lg:w-[20%] md:w-[33%] sm:w-[48%] w-[100%] justify-center items-center md:items-start gap-2 p-2"
            >
              <li>
                <h3 className="text-2xl font-semibold">{item.heading}</h3>
              </li>
              {item.bullets.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="text-[13px] text-gray-500"
                      to={item.textLink}
                    >
                      {item.linkText}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          );
        })}

        <div className="flex flex-col lg:w-[33%] md:w-[33%] sm:w-[48%] w-[100%] justify-center items-center md:items-start gap-2 text-center sm:text-left p-2">
          <h2 className="text-2xl font-semibold">Subscribe to newsletter</h2>
          <p className="text-[13px] text-gray-500">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>
          <input
            className="bg-white text-gray-500 border-none outline-none h-[45px] w-[100%] p-[10px] rounded-md"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="h-[45px] w-[100%] lg:w-[30%] bg-[#ff5252] text-white rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between py-3 border-t border-gray-300 items-center">
        <ul className="flex justify-center lg:justify-start gap-5 items-center w-[100%] mt-5 md:w-[48%] lg:w-[30%]">
          {socialData.map((item, index) => {
            return (
              <li key={index} className="h-[40px] w-[40px] bg-white hover:bg-[#ff5252] hover:text-white transition duration-700 flex justify-center items-center rounded-full">
                <NavLink to={item.link}>{item.icon}</NavLink>
              </li>
            );
          })}
        </ul>

        <p className="w-[100%] md:w-[48%] lg:w-[30%] text-center mt-5">© 2025 - Ecommerce Template</p>

        <ul className="w-[100%] md:w-[100%] lg:w-[30%] flex justify-center lg:justify-end mt-5 gap-5">
          {imgUrl.map((item, index)=>{
            return(
              <li key={index}>
                <img src={item} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
