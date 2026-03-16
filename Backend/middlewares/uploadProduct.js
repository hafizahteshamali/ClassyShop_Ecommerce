import multer from "multer";
import productStorage from "../Config/ProductCloudinary.js";

const productUpload = multer({storage: productStorage});

export default productUpload;