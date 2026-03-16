import { useEffect, useState } from "react";
import {
  blogsData,
  categoriesData,
} from "../../assets/ConstantData";
import HomeCat from "../../components/HomeCat";
import HeroBanner from "./elements/HeroBanner";
import ProductSlider from "../../components/ProductSlider";
import Banner from "./elements/Banner";
import Shipping from "./elements/Shipping";
import BlogCard from "../../components/BlogCard";
import Modal from "../../components/Modal";
import { getReq } from "../../api/axios";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const HomePage = () => {
  const [allFeaturePro, setallFeaturePro] = useState([])
  const [isTshirt, setIsTshirt] = useState([]);
  const [isAllCasualShirts, setIsCasualShirt] = useState([])
  const [isWomenKurta, setIsWomenKurta] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getFeatureProduct = async () => {
    try {
      setIsLoading(true)
      const response = await getReq("/products?featured=true&limit=20");
      if (response.success) {
        setallFeaturePro(response?.products || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const getAllMenProduct = async () => {
    try {
      setIsLoading(true)
      const response = await getReq("/products?category=T-shirt&limit=15");
      setIsTshirt(response.products)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getAllMenCasualShirts = async () => {
    try {
      setIsLoading(true)
      const response = await getReq("/products?category=casual-shirt");
      setIsCasualShirt(response.products)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getAllWomenKurtas = async () => {
    try {
      setIsLoading(true)
      const response = await getReq("/products?category=kurtas");
      setIsWomenKurta(response.products)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getFeatureProduct();
    getAllMenProduct();
    getAllMenCasualShirts();
    getAllWomenKurtas();
  }, []);

  return (
    <>
      <HeroBanner />
      <HomeCat categoriesData={categoriesData} />

      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex justify-between my-5">
            <h1 className="text-2xl lg:text-4xl font-[600]">Features Products</h1>
            <NavLink className="flex w-[40%] justify-end items-center gap-2 text-sm lg:text-xl text-blue-600 font-semibold" to="/products">view more <FaAngleDoubleRight className="text-xl" /> </NavLink>
          </div>
          <ProductSlider item={4} Productdata={allFeaturePro} isLoading={isLoading} />
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto">
          <Banner />
          <Shipping />

          <div className="flex justify-between my-5">
            <h1 className="text-2xl lg:text-4xl font-[600]">Men's T-Shirts</h1>
            <NavLink className="flex w-[40%] justify-end items-center gap-2 text-sm lg:text-xl text-blue-600 font-semibold" to="/products">view more <FaAngleDoubleRight className="text-xl" /> </NavLink>
          </div>
          <ProductSlider item={4} Productdata={isTshirt} isLoading={isLoading} />

          <div className="flex justify-between my-5">
            <h1 className="text-2xl lg:text-4xl font-[600]">Men's Casual Shirts</h1>
            <NavLink className="flex w-[40%] justify-end items-center gap-2 text-sm lg:text-xl text-blue-600 font-semibold" to="/products">view more <FaAngleDoubleRight className="text-xl" /> </NavLink>
          </div>
          <ProductSlider item={4} Productdata={isAllCasualShirts} isLoading={isLoading} />

          <Shipping notShipping />

          <div className="flex justify-between my-5">
            <h1 className="text-2xl lg:text-4xl font-[600]">Women's kurtas</h1>
            <NavLink className="flex w-[40%] justify-end items-center gap-2 text-sm lg:text-xl text-blue-600 font-semibold" to="/products">view more <FaAngleDoubleRight className="text-xl" /> </NavLink>
          </div>
          <ProductSlider item={4} Productdata={isWomenKurta} isLoading={isLoading} />
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            {blogsData.map((item, index) => (
              <BlogCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;