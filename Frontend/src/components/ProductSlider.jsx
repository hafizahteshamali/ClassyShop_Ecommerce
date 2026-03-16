import React from "react";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import RingLoader from 'react-spinners/RingLoader';

const ProductSlider = ({ item, Productdata, isLoading }) => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: item,
    slidesToScroll: 1,
    // Add padding between slides
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="productsSlider my-8 w-full px-2">
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-64">
          <RingLoader />
        </div>
      ) : (
        <Slider {...settings} className="w-full -mx-2">
          {Productdata?.map((item) => (
            <div key={item._id} className="px-2"> {/* Add padding wrapper */}
              <ProductItem data={item} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductSlider;