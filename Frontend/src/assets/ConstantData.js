

export const NavData = [
  {
    text: "Home",
    url: "/",
    dropDown: false,
    subCategory: false,
  },
  {
    text: "Fashion",
    url: "/",
    dropDown: true,
    subCategory: true,
    subMenu: [
      {
        text: "Men",
        url: "/",
        dropDown: true,
        subCategory: true,
        subMenu: [
          {
            text: "T-Shirts",
            url: "/mens/t-shirt",
          },
          {
            text: "Casual Shirts",
            url: "/mens/casual-shirt",
          },
          {
            text: "Blazer & Coats",
            url: "/mens/blazer-and-coats",
          },
          {
            text: "Jeans",
            url: "/mens/jeans",
          },
        ],
      },
      {
        text: "Women",
        url: "/",
        dropDown: true,
        subCategory: true,
        subMenu: [
          {
            text: "Kurtas & Suits",
            url: "/womens/kurtas-and-suits",
          },
          {
            text: "Sarees",
            url: "/womens/sarees",
          },
          {
            text: "Tops",
            url: "/womens/tops",
          },
          {
            text: "Jeans",
            url: "/womens/jeans",
          },
        ],
      },
      {
        text: "Kids",
        url: "/",
        dropDown: true,
        subCategory: true,
        subMenu: [
          {
            text: "Shirt and Jeans",
            url: "/kids/shirt-and-jeans",
          },
          {
            text: "Kurta shalwar",
            url: "/kids/kurta-and-shalwar",
          },
        ],
      },
    ],
  },
  {
    text: "Electronics",
    url: "/",
    dropDown: true,
    subCategory: true,
    subMenu: [
      {
        text: "Mobiles",
        url: "/",
        dropDown: true,
        subCategory: true,
        subMenu: [
          {
            text: "Apple",
            url: "/mobiles/apple",
          },
          {
            text: "Samsung",
            url: "/mobiles/samsung",
          },
          {
            text: "Oppo",
            url: "/mobiles/oppo",
          },
          {
            text: "Vivo",
            url: "/mobiles/vivo",
          },
          {
            text: "Techno",
            url: "/mobiles/techno",
          },
        ],
      },
      {
        text: "Laptops",
        url: "/electronics/laptops",
        dropDown: false,
        subCategory: false,
      },
      {
        text: "Smart Watches",
        url: "/electronics/smart-watches",
        dropDown: false,
        subCategory: false,
      },
      {
        text: "Cameras",
        url: "/electronics/cameras",
        dropDown: false,
        subCategory: false,
      },
    ],
  },
  {
    text: "Bags",
    url: "/",
    dropDown: true,
    subCategory: true,
    subMenu: [
      {
        text: "Men Bags",
        url: "/bags/men-bags",
        dropDown: false,
        subCategory: false,
      },
      {
        text: "Women Bags",
        url: "/bags/women-bags",
        dropDown: false,
        subCategory: false,
      },
      {
        text: "Kid Bags",
        url: "/bags/kid-bags",
        dropDown: false,
        subCategory: false,
      },
    ],
  },
  {
    text: "Footwear",
    url: "/",
    dropDown: true,
    subCategory: true,
    subMenu: [
      {
        text: "Men Footwear",
        url: "/footwear/men-footwears",
        dropDown: false,
        subCategory: false,
      },
      {
        text: "Women Footwear",
        url: "/footwear/women-footwears",
        dropDown: false,
        subCategory: false,
      },
      {
        text: "Kid Footwear",
        url: "/footwear/kid-footwears",
        dropDown: false,
        subCategory: false,
      },
    ],
  },
  {
    text: "Groceries",
    url: "/groceries",
    dropDown: false,
    subCategory: false,
  },
  {
    text: "Beauty",
    url: "/beauty",
    dropDown: false,
    subCategory: false,
  },
  {
    text: "Wellness",
    url: "/wellness",
    dropDown: false,
    subCategory: false,
  },
  {
    text: "Jewellery",
    url: "/jewellery",
    dropDown: false,
    subCategory: false,
  },
];

export const bannerImg = [
  "./assets/images/bannerimg-1.jpg",
  "./assets/images/bannerimg-2.jpg",
  "./assets/images/bannerimg-3.jpg",
  "./assets/images/bannerimg-4.jpg",
];
export const categoriesData = [
  {
    catImg: "./assets/images/fashions-img.png",
    catName: "Fashions",
    catLink: "/",
  },
  {
    catImg: "./assets/images/electronics-img.png",
    catName: "Electronics",
    catLink: "/",
  },
  {
    catImg: "./assets/images/bags-img.png",
    catName: "Bags",
    catLink: "/",
  },
  {
    catImg: "./assets/images/footwear-img.png",
    catName: "Footwear",
    catLink: "/",
  },
  {
    catImg: "./assets/images/groceries-img.png",
    catName: "Groceries",
    catLink: "/",
  },
  {
    catImg: "./assets/images/beauty-img.png",
    catName: "Beauty",
    catLink: "/",
  },
  {
    catImg: "./assets/images/wellness-img.png",
    catName: "Wellness",
    catLink: "/",
  },
  {
    catImg: "./assets/images/jwellery-img.png",
    catName: "Jwelleries",
    catLink: "/",
  },
];

export const PopularProductCategory = [
  {
    text: "Fashion",
    link: "/",
  },
  {
    text: "Electronics",
    link: "/",
  },
  {
    text: "Bags",
    link: "/",
  },
  {
    text: "Footwear",
    link: "/",
  },
  {
    text: "Groceries",
    link: "/",
  },
  {
    text: "Beauty",
    link: "/",
  },
  {
    text: "Wellness",
    link: "/",
  },
];

export const PopularProduct = [
  {
    id: 1,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg",
      "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
      "https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg",
      "https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg",
    ],
    discount: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "CLAFOUTIS",
    stock: 4744,
    productName: "Men Opaque Casual Shirt",
    ratings: 5,
    quantity: 1,
    category: "fashion",
    size: ["S", "M", "L"],
    oldPrice: "1,650",
    salePrice: "1,450",
    btnText: "ADD TO CART",
  },
  {
    id: 2,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
      "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg",
      "https://serviceapi.spicezgold.com/download/1742462909161_gdgd3.jpg",
      "https://serviceapi.spicezgold.com/download/1742462909162_gdgd4.jpg",
    ],
    discount: 14,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Campus Sutra",
    stock: 8526,
    productName: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt",
    ratings: 3,
    quantity: 1,
    category: "fashion",
    size: ["S", "M", "L"],
    oldPrice: "2,200",
    salePrice: "1,850",
    btnText: "ADD TO CART",
  },
  {
    id: 3,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462729829_zoom_1-1673275594.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp",
      "https://serviceapi.spicezgold.com/download/1742462729829_zoom_1-1673275594.webp",
    ],
    discount: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Allen Solly",
    stock: 7449,
    productName: "Men Pure Cotton Striped Casual Shirt",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "2,250",
    salePrice: "1,900",
    btnText: "ADD TO CART",
  },
  {
    id: 4,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
      "https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp",
      "https://serviceapi.spicezgold.com/download/1742462552743_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp",
      "https://serviceapi.spicezgold.com/download/1742462552744_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp",
    ],
    discount: 13,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "all about you",
    stock: 4532,
    productName: "Embroidered Satin Saree",
    ratings: 5,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "4,785",
    salePrice: "5,500",
    btnText: "ADD TO CART",
  },
  {
    id: 5,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462485037_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp",
      "https://serviceapi.spicezgold.com/download/1742462485037_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp",
      "https://serviceapi.spicezgold.com/download/1742462485045_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp",
    ],
    discount: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Kasee",
    stock: 4532,
    productName: "Embellished Embroidered Saree",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "1,999",
    salePrice: "1,955",
    btnText: "ADD TO CART",
  },
  {
    id: 6,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462383491_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
      "https://serviceapi.spicezgold.com/download/1742462383491_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp",
      "https://serviceapi.spicezgold.com/download/1742462383493_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg",
      "https://serviceapi.spicezgold.com/download/1742462383495_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp",
    ],
    discount: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Koskii",
    stock: 87450,
    productName: "Floral Beads and Stones Pure Chiffon Saree",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "1,850",
    salePrice: "2,450",
    btnText: "ADD TO CART",
  },
  {
    id: 7,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-2-202304220523.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp",
      "https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-2-202304220523.webp",
      "https://serviceapi.spicezgold.com/download/1742462287665_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp",
    ],
    discount: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Koskii",
    stock: 8561,
    productName: "Embellished Sequinned Ready to Wear Saree",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "2,450",
    salePrice: "2,650",
    btnText: "ADD TO CART",
  },
  {
    id: 8,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742462212410_ascscscscccswefsdvdd3.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg",
      "https://serviceapi.spicezgold.com/download/1742462212410_ascscscscccswefsdvdd3.jpg",
      "https://serviceapi.spicezgold.com/download/1742462212412_ascscscscccswefsdvdd2.jpg",
    ],
    discount: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Koskii",
    stock: 8561,
    productName: "Embellished Sequinned Ready to Wear Saree",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "2,450",
    salePrice: "2,650",
    btnText: "ADD TO CART",
  },
  {
    id: 9,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742453374891_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742453374892_1000014029787-Green-GREEN-1000014029787_06-2100.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742453374891_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
      "https://serviceapi.spicezgold.com/download/1742453374892_1000014029787-Green-GREEN-1000014029787_06-2100.jpg",
      "https://serviceapi.spicezgold.com/download/1742453374892_1000014029787-Green-GREEN-1000014029787_02-2100.jpg",
    ],
    discount: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Snitch",
    stock: 8561,
    productName: "Beige Spread Collar Classic Slim Fit Cotton Casual Shirt",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "2,450",
    salePrice: "2,650",
    btnText: "ADD TO CART",
  },
  {
    id: 10,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742453195856_ffffffffff1.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742453195856_ffffffffff4.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742453195856_ffffffffff1.jpg",
      "https://serviceapi.spicezgold.com/download/1742453195856_ffffffffff4.jpg",
      "https://serviceapi.spicezgold.com/download/1742453195856_ffffffffff4.jpg",
      "https://serviceapi.spicezgold.com/download/1742453195857_ffffffffff2.jpg",
    ],
    discount: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Zandu",
    stock: 8561,
    productName: "Polo Collar Pure Cotton T-shirt",
    ratings: 4,
    quantity: 1,
    size: ["S", "M", "L"],
    category: "fashion",
    oldPrice: "2,450",
    salePrice: "2,650",
    btnText: "ADD TO CART",
  },
  {
    id: 11,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742446875533_app3.jpeg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742446875533_app2.jpeg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742446875533_app3.jpeg",
      "https://serviceapi.spicezgold.com/download/1742446875533_app2.jpeg",
      "https://serviceapi.spicezgold.com/download/1742446875533_app1.jpeg",
    ],
    discount: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Apple",
    stock: 1242,
    productName: "Apple iPhone 15 (Blue, 128 GB)",
    ratings: 5,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "3,599",
    salePrice: "2,650",
    btnText: "ADD TO CART",
  },
  {
    id: 12,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742446803508_sam1.jpeg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742446803508_sam3.jpeg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742446803508_sam1.jpeg",
      "https://serviceapi.spicezgold.com/download/1742446803508_sam3.jpeg",
      "https://serviceapi.spicezgold.com/download/1742446803509_sam2.jpeg",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Samsung",
    stock: 84782,
    productName: "SAMSUNG Galaxy M14 4G (Sapphire Blue, 64 GB) (4 GB RAM)",
    ratings: 5,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "1,8500",
    salePrice: "1,9499",
    btnText: "ADD TO CART",
  },
  {
    id: 13,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742446425017_samsung-s24-ultra-5g-512-gb-12-gb-ram-titanium-gray-mobile-phone-digital-o494352159-p607431532-0-202401191135.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742446425017_samsung-s24-ultra-5g-512-gb-12-gb-ram-titanium-gray-mobile-phone-digital-o494352159-p607431532-2-202401191135.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742446425017_samsung-s24-ultra-5g-512-gb-12-gb-ram-titanium-gray-mobile-phone-digital-o494352159-p607431532-0-202401191135.webp",
      "https://serviceapi.spicezgold.com/download/1742446425017_samsung-s24-ultra-5g-512-gb-12-gb-ram-titanium-gray-mobile-phone-digital-o494352159-p607431532-2-202401191135.webp",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Samsung",
    stock: 7477,
    productName: "SAMSUNG Galaxy M14 4G (Sapphire Blue, 64 GB) (4 GB RAM)",
    ratings: 5,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "1,8500",
    salePrice: "1,9499",
    btnText: "ADD TO CART",
  },
  {
    id: 14,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742443661874_jiobook-11-2023-ultimate-learning-partner-nb1112mm-blu-4g-lte-mediatek-2-0-ghz-octa-core-4-gb-lpddr4-64-gb-emmc-jioos-expandable-256-gb-29-46-cm-11-6-inch-digital-o491894913-p609664147-0-202408281600.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742443661874_chuwi-intel-core-i5-10th-gen-1035g1-16-gb-512-gb-ssd-windows-11-home-corebook-x-grey-laptop-product-images-orvkj8euljf-p607675928-1-202402012032.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742443661874_jiobook-11-2023-ultimate-learning-partner-nb1112mm-blu-4g-lte-mediatek-2-0-ghz-octa-core-4-gb-lpddr4-64-gb-emmc-jioos-expandable-256-gb-29-46-cm-11-6-inch-digital-o491894913-p609664147-0-202408281600.webp",
      "https://serviceapi.spicezgold.com/download/1742443661874_chuwi-intel-core-i5-10th-gen-1035g1-16-gb-512-gb-ssd-windows-11-home-corebook-x-grey-laptop-product-images-orvkj8euljf-p607675928-1-202402012032.webp",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Samsung",
    stock: 98744,
    productName:
      "JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS)/Octa-core/4GB RAM/64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 grams)/Dual band WiFi + SIM/Blue",
    ratings: 5,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "1,8500",
    salePrice: "1,9499",
    btnText: "ADD TO CART",
  },
  {
    id: 15,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742443577860_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-0-202405071920.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742443577860_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-2-202405071920.jpeg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742443577860_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-0-202405071920.webp",
      "https://serviceapi.spicezgold.com/download/1742443577860_tecno-pop-8-64-gb-4-gb-ram-black-mobile-phone-digital-o494351909-p607019073-2-202405071920.jpeg",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Tecno",
    stock: 8456,
    productName: "Tecno POP 8 64 GB, 4 GB RAM, Black, Mobile Phone",
    ratings: 4,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "1,8500",
    salePrice: "1,9499",
    btnText: "ADD TO CART",
  },
  {
    id: 16,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742443512113_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742443512114_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742443512113_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp",
      "https://serviceapi.spicezgold.com/download/1742443512114_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "POCO",
    stock: 85485,
    productName: "POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone",
    ratings: 4,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "1,8500",
    salePrice: "1,9499",
    btnText: "ADD TO CART",
  },
  {
    id: 17,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742441318033_apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-2-202208221207.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742441318033_apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742441318033_apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-2-202208221207.webp",
      "https://serviceapi.spicezgold.com/download/1742441318033_apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.webp",
    ],
    discount: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Apple",
    stock: 85745,
    productName: "Apple iPhone 13 256GB Black",
    ratings: 4,
    quantity: 1,
    size: ["64GB", "128GB", "256GB"],
    category: "electronics",
    oldPrice: "1,8500",
    salePrice: "1,9499",
    btnText: "ADD TO CART",
  },
  // Bags
  {
    id: 18,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742447215242_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-2-202312201359.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp",
      "https://serviceapi.spicezgold.com/download/1742447215242_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-2-202312201359.webp",
      "https://serviceapi.spicezgold.com/download/1742447215242_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-1-202312201359.webp",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "STYLATO",
    stock: 74848,
    productName:
      "Large 33 L Laptop Backpack 33 L Waterproof 5-Zipper Compartment Premium Daily Use Bags For All Day Support  (Blue)",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "1,450",
    salePrice: "1,749",
    btnText: "ADD TO CART",
  },
  {
    id: 19,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742447169245_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-0-202303100916.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742447169245_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-2-202303100916.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742447169245_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-0-202303100916.webp",
      "https://serviceapi.spicezgold.com/download/1742447169245_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-2-202303100916.webp",
      "https://serviceapi.spicezgold.com/download/1742447169247_blubags-40l-men-backpack-school-bag-college-bag-office-bag-laptop-bag-grey-product-images-rvamcbxklo-1-202303100916.webp",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "GESPO",
    stock: 8457,
    productName: "Medium 24 L Laptop Backpack 5DD44PA (Black)",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "1,550",
    salePrice: "1,650",
    btnText: "ADD TO CART",
  },
  {
    id: 20,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-0-202309290238.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-0-202309290238.webp",
      "https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "GESPO",
    stock: 84744,
    productName:
      "Large 40 L Backpack 40L Casual Trendy Laptop Backpack School College Bag For Men & Women (Black)",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "1,550",
    salePrice: "1,650",
    btnText: "ADD TO CART",
  },
  {
    id: 21,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742447011143_blubags-40l-polyester-men-fashion-school-college-laptop-bag-t-blue-product-images-rvwphzakkr-0-202303111245.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742447011143_blubags-40l-polyester-men-fashion-school-college-laptop-bag-t-blue-product-images-rvwphzakkr-2-202303111246.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742447011143_blubags-40l-polyester-men-fashion-school-college-laptop-bag-t-blue-product-images-rvwphzakkr-0-202303111245.webp",
      "https://serviceapi.spicezgold.com/download/1742447011143_blubags-40l-polyester-men-fashion-school-college-laptop-bag-t-blue-product-images-rvwphzakkr-2-202303111246.webp",
      "https://serviceapi.spicezgold.com/download/1742447011144_blubags-40l-polyester-men-fashion-school-college-laptop-bag-t-blue-product-images-rvwphzakkr-1-202303111245.webp",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Legit",
    stock: 47857,
    productName:
      "Medium 29 L Laptop Backpack Most popular college/office backpack ( Black ) (Black)",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "1,150",
    salePrice: "1,350",
    btnText: "ADD TO CART",
  },
  {
    id: 22,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742446102500_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742446102502_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-3-202402141853.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742446102500_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg",
      "https://serviceapi.spicezgold.com/download/1742446102502_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-3-202402141853.jpg",
      "https://serviceapi.spicezgold.com/download/1742446102505_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-2-202402141853.jpg",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Fytona",
    stock: 84784,
    productName:
      "Fytona Medium Laptop Backpack | Light weight For School Collage Office Tuition and Picnic | Waterproof Backpack (Grey, 25 L)",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "999",
    salePrice: "1,050",
    btnText: "ADD TO CART",
  },
  {
    id: 23,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742446046526_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742446046527_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-3-202401161039.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742446046526_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
      "https://serviceapi.spicezgold.com/download/1742446046527_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-3-202401161039.jpg",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Fytona",
    stock: 84784,
    productName: "FLORES Stylish Fashion Backpack For Girls and boys",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "1,550",
    salePrice: "1,850",
    btnText: "ADD TO CART",
  },
  {
    id: 24,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742443970283_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-0-202405282358.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742443970284_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-2-202405282358.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742443970283_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-0-202405282358.webp",
      "https://serviceapi.spicezgold.com/download/1742443970284_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-2-202405282358.jpg",
      "https://serviceapi.spicezgold.com/download/1742443970285_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-1-202405282358.jpg",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "KSC",
    stock: 84785,
    productName: "KSC KHATUSHYAM COLLECTION Grey Pu For Women Handheld Bag",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "780",
    salePrice: "850",
    btnText: "ADD TO CART",
  },
  {
    id: 25,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742443822296_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-2-202404151052.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742443822299_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742443822296_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-2-202404151052.jpg",
      "https://serviceapi.spicezgold.com/download/1742443822299_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",
      "https://serviceapi.spicezgold.com/download/1742443822301_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-0-202404151052.jpg",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "ZAALIQA",
    stock: 78483,
    productName: "KSC KHATUSHYAM COLLECTION Grey Pu For Women Handheld Bag",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "850",
    salePrice: "949",
    btnText: "ADD TO CART",
  },
  {
    id: 26,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742446046526_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742446046527_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-3-202401161039.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742446046526_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg",
      "https://serviceapi.spicezgold.com/download/1742446046527_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-3-202401161039.jpg",
    ],
    discount: 15,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Fytona",
    stock: 84784,
    productName: "FLORES Stylish Fashion Backpack For Girls and boys",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "bags",
    oldPrice: "1,550",
    salePrice: "1,850",
    btnText: "ADD TO CART",
  },
  {
    id: 27,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742445819669_piclite-slipper-for-women-daily-use-flipflops-ladies-slipper-casual-doctor-ortho-slipper-pack-of-1lh5-blue-7-product-images-rvwsfbtzkt-0-202401241802.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742445819670_piclite-slipper-for-women-daily-use-flipflops-ladies-slipper-casual-doctor-ortho-slipper-pack-of-1lh5-blue-7-product-images-rvwsfbtzkt-3-202401241802.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742445819669_piclite-slipper-for-women-daily-use-flipflops-ladies-slipper-casual-doctor-ortho-slipper-pack-of-1lh5-blue-7-product-images-rvwsfbtzkt-0-202401241802.jpg",
      "https://serviceapi.spicezgold.com/download/1742445819670_piclite-slipper-for-women-daily-use-flipflops-ladies-slipper-casual-doctor-ortho-slipper-pack-of-1lh5-blue-7-product-images-rvwsfbtzkt-3-202401241802.jpg",
      "https://serviceapi.spicezgold.com/download/1742445819670_piclite-slipper-for-women-daily-use-flipflops-ladies-slipper-casual-doctor-ortho-slipper-pack-of-1lh5-blue-7-product-images-rvwsfbtzkt-1-202401241802.webp",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Piclite",
    stock: 78470,
    productName:
      "Piclite Slipper for women Daily use flipflops ladies slipper Casual Doctor Ortho slipper pack of 1LH5-BLUE-7",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "footwear",
    oldPrice: "350",
    salePrice: "450",
    btnText: "ADD TO CART",
  },
  {
    id: 28,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742445707490_paragon-k6015l-women-sandals-casual-sandals-stylish-comfortable-durable-for-daily-wear-product-images-rvvoayb8w2-0-202309061241.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742445707491_paragon-k6015l-women-sandals-casual-sandals-stylish-comfortable-durable-for-daily-wear-product-images-rvvoayb8w2-3-202309061241.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742445707490_paragon-k6015l-women-sandals-casual-sandals-stylish-comfortable-durable-for-daily-wear-product-images-rvvoayb8w2-0-202309061241.jpg",
      "https://serviceapi.spicezgold.com/download/1742445707491_paragon-k6015l-women-sandals-casual-sandals-stylish-comfortable-durable-for-daily-wear-product-images-rvvoayb8w2-3-202309061241.jpg",
      "https://serviceapi.spicezgold.com/download/1742445707492_paragon-k6015l-women-sandals-casual-sandals-stylish-comfortable-durable-for-daily-wear-product-images-rvvoayb8w2-1-202309061241.jpg",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Paragon",
    stock: 74858,
    productName:
      "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "footwear",
    oldPrice: "1,350",
    salePrice: "1,450",
    btnText: "ADD TO CART",
  },
  {
    id: 29,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742445615392_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rvbzu7qnum-0-202408051111.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742445615393_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rvbzu7qnum-2-202408051111.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742445615392_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rvbzu7qnum-0-202408051111.jpg",
      "https://serviceapi.spicezgold.com/download/1742445615393_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rvbzu7qnum-2-202408051111.jpg",
      "https://serviceapi.spicezgold.com/download/1742445615393_paragon-women-s-trendy-wedge-heel-sandals-with-cushioned-sole-and-sturdy-construction-for-everyday-use-product-images-rvbzu7qnum-1-202408051111.jpg",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Paragon",
    stock: 85484,
    productName:
      "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "footwear",
    oldPrice: "1,250",
    salePrice: "1,450",
    btnText: "ADD TO CART",
  },
  {
    id: 30,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742445116899_file_1734774478545_1017934b-ebb7-4394-ab4e-8033671295541721124227083ASTEROIDMenColourblockedSuedeSneakers1.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742445116900_file_1734774486935_58175cfe-72c2-4196-abcd-fe58e68be2a81721124227213ASTEROIDMenColourblockedSuedeSneakers2.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742445116899_file_1734774478545_1017934b-ebb7-4394-ab4e-8033671295541721124227083ASTEROIDMenColourblockedSuedeSneakers1.jpg",
      "https://serviceapi.spicezgold.com/download/1742445116900_file_1734774486935_58175cfe-72c2-4196-abcd-fe58e68be2a81721124227213ASTEROIDMenColourblockedSuedeSneakers2.jpg",
    ],
    discount: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "ASTEROID",
    stock: 78476,
    productName: "Men Colourblocked Suede Lightweight",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "footwear",
    oldPrice: "1,650",
    salePrice: "1,850",
    btnText: "ADD TO CART",
  },
  {
    id: 31,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742444323229_denill-brown-bellies-for-women-product-images-rvrehaibat-0-202211050253.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742444323229_denill-brown-bellies-for-women-product-images-rvrehaibat-2-202211050253.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742444323229_denill-brown-bellies-for-women-product-images-rvrehaibat-0-202211050253.jpg",
      "https://serviceapi.spicezgold.com/download/1742444323229_denill-brown-bellies-for-women-product-images-rvrehaibat-2-202211050253.webp",
      "https://serviceapi.spicezgold.com/download/1742444323231_denill-brown-bellies-for-women-product-images-rvrehaibat-1-202211050253.jpg",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Denill",
    stock: 58555,
    productName:
      "Aqualite's Trendy and Stylish Pista Flip Flops & Slides For Women",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "footwear",
    oldPrice: "1,450",
    salePrice: "1,500",
    btnText: "ADD TO CART",
  },
  {
    id: 32,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463224827_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463224827_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463224827_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp",
      "https://serviceapi.spicezgold.com/download/1742463224827_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Fortune",
    stock: 8469,
    productName: "Fortune Sunlite Refined Sunflower Oil 1 L",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "groceries",
    oldPrice: "999",
    salePrice: "1200",
    btnText: "ADD TO CART",
  },
  {
    id: 33,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452458052_gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202308301722.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452458052_gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202308301722.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452458052_gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202308301722.webp",
      "https://serviceapi.spicezgold.com/download/1742452458052_gemini-refined-sunflower-oil-1-l-product-images-o490012719-p490012719-0-202308301722.webp",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Gemini",
    stock: 4780,
    productName: "Gemini Refined Sunflower Oil 1 L",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "groceries",
    oldPrice: "1280",
    salePrice: "999",
    btnText: "ADD TO CART",
  },
  {
    id: 34,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452344944_file_1734788009997_lay-s-american-style-cream-onion-potato-chips-82-g-product-images-o491696354-p590121272-0-202410031824.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452344945_file_1734788009998_lay-s-american-style-cream-onion-potato-chips-82-g-product-images-o491696354-p590121272-1-202410031824.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452344944_file_1734788009997_lay-s-american-style-cream-onion-potato-chips-82-g-product-images-o491696354-p590121272-0-202410031824.webp",
      "https://serviceapi.spicezgold.com/download/1742452344945_file_1734788009998_lay-s-american-style-cream-onion-potato-chips-82-g-product-images-o491696354-p590121272-1-202410031824.webp",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Lay's",
    stock: 74855,
    productName: "Lay's American Style Cream & Onion Potato Chips 82 g",
    ratings: 5,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "groceries",
    oldPrice: "45",
    salePrice: "55",
    btnText: "ADD TO CART",
  },
  {
    id: 35,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452286104_good-life-refined-rice-bran-oil-1-l-product-images-o491472706-p491472706-0-202205172238(1).webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452286105_good-life-refined-rice-bran-oil-1-l-product-images-o491472706-p491472706-1-202205172238(1).webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452286104_good-life-refined-rice-bran-oil-1-l-product-images-o491472706-p491472706-0-202205172238(1).webp",
      "https://serviceapi.spicezgold.com/download/1742452286105_good-life-refined-rice-bran-oil-1-l-product-images-o491472706-p491472706-1-202205172238(1).webp",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Good Life",
    stock: 47854,
    productName: "Good Life Refined Rice Bran Oil 1 L",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "groceries",
    oldPrice: "520",
    salePrice: "300",
    btnText: "ADD TO CART",
  },
  {
    id: 36,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452220122_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452220122_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452220122_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp",
      "https://serviceapi.spicezgold.com/download/1742452220122_saffola-gold-pro-healthy-lifestyle-ricebran-based-blended-oil-1-l-product-images-o490000057-p490000057-0-202403191806.webp",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Saffola",
    stock: 47854,
    productName:
      "Saffola Gold Pro Healthy Lifestyle RiceBran Based Blended Oil 1 L",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "groceries",
    oldPrice: "220",
    salePrice: "245",
    btnText: "ADD TO CART",
  },
  {
    id: 37,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452160120_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-0-202210071628(1).webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452160120_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-1-202210071628.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452160120_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-0-202210071628(1).webp",
      "https://serviceapi.spicezgold.com/download/1742452160120_wipro-safewash-matic-front-load-liquid-detergent-2-l-product-images-o491631729-p491631729-1-202210071628.jpg",
    ],
    discount: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Surf Excel",
    stock: 7483,
    productName: "Surf Excel Matic Front Load Liquid Detergent 2 L",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "groceries",
    oldPrice: "199",
    salePrice: "220",
    btnText: "ADD TO CART",
  },
  {
    id: 38,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463754096_nivea-24-hour-melt-in-moisture-caring-lip-balm-cherry-shine-4-8-g-product-images-o490180140-p490180140-0-202203170330(1).webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1745666567814_woman-7088803_1280.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463754096_nivea-24-hour-melt-in-moisture-caring-lip-balm-cherry-shine-4-8-g-product-images-o490180140-p490180140-0-202203170330(1).webp",
      "https://serviceapi.spicezgold.com/download/1745666567814_woman-7088803_1280.jpg",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "VitaGreen",
    stock: 4780,
    productName: "VitaGreen Wheat Grass Capsules 60's",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "beauty",
    oldPrice: "150",
    salePrice: "199",
    btnText: "ADD TO CART",
  },
  {
    id: 39,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452993178_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-0-202310140619.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452993179_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-1-202310140619.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452993178_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-0-202310140619.webp",
      "https://serviceapi.spicezgold.com/download/1742452993179_vaseline-original-care-lip-therapy-17-g-product-images-o492367867-p590900289-1-202310140619.jpg",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Vaseline",
    stock: 7484,
    productName: "Vaseline Original Care Lip Therapy 17 g",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "beauty",
    oldPrice: "170",
    salePrice: "185",
    btnText: "ADD TO CART",
  },
  {
    id: 40,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452812476_navratna-ayurvedic-cool-oil-200-ml-prod-o412393-p608316522-0-202403020842.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452812476_navratna-ayurvedic-cool-oil-200-ml-prod-o412393-p608316522-0-202403020842.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452812476_navratna-ayurvedic-cool-oil-200-ml-prod-o412393-p608316522-0-202403020842.webp",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Navratna",
    stock: 8545,
    productName: "Navratna Ayurvedic Cool Oil 200 ml",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "beauty",
    oldPrice: "174.0",
    salePrice: "185",
    btnText: "ADD TO CART",
  },
  {
    id: 41,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452693161_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-0-202304241416.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452693161_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-0-202304241416.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452693161_wow-skin-science-rose-water-for-face-made-with-pure-kannauj-rose-extracts-use-it-as-toner-skin-hyderator-makeup-primer-100-ml-product-images-orvsfyevzsf-p600863991-0-202304241416.webp",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Wow Skin Science",
    stock: 4769,
    productName:
      "WOW Skin Science Rose Water for Face | Made with Pure Kannauj Rose Extracts | Use It As Toner, Skin Hyderator & Makeup Primer | 100 ml",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "beauty",
    oldPrice: "250",
    salePrice: "280",
    btnText: "ADD TO CART",
  },
  {
    id: 42,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452638231_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p5969279.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452638231_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p5969279.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452638231_muuchstac-ocean-face-wash-for-men-fights-acne-pimple-skin-whitening-brightening-all-skin-types-100-ml-each-pack-of-2-product-images-orvgtzrehky-p5969279.webp",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Muuchstac",
    stock: 2499,
    productName:
      "Muuchstac Ocean Face Wash for Men, Fights Acne & Pimple, Skin Whitening & Brightening, All Skin Types, 100 Ml Each (Pack Of 2)",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "beauty",
    oldPrice: "178.0",
    salePrice: "185",
    btnText: "ADD TO CART",
  },
  {
    id: 43,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463683852_nandika-beauty-massage-cream-wine-1-kg-prod-o1009518-p608316885-0-202403020848.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463683852_nandika-beauty-massage-cream-wine-1-kg-prod-o1009518-p608316885-1-202403020848.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463683852_nandika-beauty-massage-cream-wine-1-kg-prod-o1009518-p608316885-0-202403020848.jpg",
      "https://serviceapi.spicezgold.com/download/1742463683852_nandika-beauty-massage-cream-wine-1-kg-prod-o1009518-p608316885-1-202403020848.jpg",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "Clean & Clear",
    stock: 2504,
    productName:
      "New Clean & Clear Pimple Clearing Face Wash With Salicylic Acid 80 gm",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "beauty",
    oldPrice: "299",
    salePrice: "320",
    btnText: "ADD TO CART",
  },
  {
    id: 44,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463580361_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-0-202403020846.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463580362_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-2-202403020846.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463580361_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-0-202403020846.jpg",
      "https://serviceapi.spicezgold.com/download/1742463580362_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-2-202403020846.jpg",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "VITAWIN",
    stock: 2504,
    productName: "Vitawin Grape Seed Capsule 60's",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "wellness",
    oldPrice: "650",
    salePrice: "699",
    btnText: "ADD TO CART",
  },
  {
    id: 45,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463343586_file_1734530601190_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463343586_file_1734530601190_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463343586_file_1734530601190_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
    ],
    discount: 14,
    description:
      "INLIFE Super Reds Powder | Antioxidant-Rich Superfood Supplement Drink Mix | 20 Super Fruits, Beets & Berries | Energize with Powerful Antioxidants Supports Energy 200g (Super Reds)",
    brand: "Inlife",
    stock: 8594,
    productName: "Inlife Super Reds Powder 200 g",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "wellness",
    oldPrice: "650.0",
    salePrice: "699.0",
    btnText: "ADD TO CART",
  },
  {
    id: 46,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452875229_file_1734530615012_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452875229_file_1734530615012_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452875229_file_1734530615012_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
    ],
    discount: 14,
    description:
      "INLIFE Super Antioxidant Supplement Lycopene, Green Tea, Milk Thistle, Curcumin, Grape Seed, Ginkgo Biloba, Ginger, Cranberry, Alpha Lipoic Acid, Lutein, Zeaxanthin",
    brand: "Inlife",
    stock: 7485,
    productName: "Inlife Super Greens Powder 200 g",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "wellness",
    oldPrice: "199",
    salePrice: "220",
    btnText: "ADD TO CART",
  },
  {
    id: 47,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463580361_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-0-202403020846.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463580362_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-2-202403020846.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463580361_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-0-202403020846.jpg",
      "https://serviceapi.spicezgold.com/download/1742463580362_cipzer-karela-capsule-60-s-prod-o1096493-p608316768-2-202403020846.jpg",
    ],
    discount: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    brand: "VITAWIN",
    stock: 2504,
    productName: "Vitawin Grape Seed Capsule 60's",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "wellness",
    oldPrice: "650",
    salePrice: "699",
    btnText: "ADD TO CART",
  },
  {
    id: 48,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742463343586_file_1734530601190_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742463343586_file_1734530601190_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742463343586_file_1734530601190_inlife-super-reds-powder-200-g-prod-o1131152-p607840402-0-202402092238.jpg",
    ],
    discount: 14,
    description:
      "INLIFE Super Reds Powder | Antioxidant-Rich Superfood Supplement Drink Mix | 20 Super Fruits, Beets & Berries | Energize with Powerful Antioxidants Supports Energy 200g (Super Reds)",
    brand: "Inlife",
    stock: 8594,
    productName: "Inlife Super Reds Powder 200 g",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "wellness",
    oldPrice: "650.0",
    salePrice: "699.0",
    btnText: "ADD TO CART",
  },
  {
    id: 49,
    FeatureImg1:
      "https://serviceapi.spicezgold.com/download/1742452875229_file_1734530615012_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
    FeatureImg2:
      "https://serviceapi.spicezgold.com/download/1742452875229_file_1734530615012_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
    Images: [
      "https://serviceapi.spicezgold.com/download/1742452875229_file_1734530615012_inlife-super-greens-powder-200-g-prod-o1131151-p607840398-0-202407201633.webp",
    ],
    discount: 14,
    description:
      "INLIFE Super Antioxidant Supplement Lycopene, Green Tea, Milk Thistle, Curcumin, Grape Seed, Ginkgo Biloba, Ginger, Cranberry, Alpha Lipoic Acid, Lutein, Zeaxanthin",
    brand: "Inlife",
    stock: 7485,
    productName: "Inlife Super Greens Powder 200 g",
    ratings: 4,
    quantity: 1,
    size: ["Medium", "Large"],
    category: "wellness",
    oldPrice: "199.0",
    salePrice: "220.0",
    btnText: "ADD TO CART",
  },
];

export const slides = [
  {
    id: 1,
    title: "Apple iPhone 13 128 GB Pink",
    price: "₹35,500",
    image: "/assets/images/banne1.png",
    tag: "Big saving days sale",
    isligt: true,
  },
  {
    id: 2,
    title: "Samsung Galaxy S22 Ultra",
    price: "₹79,999",
    image: "/assets/images/banne2.png",
    tag: "Limited time offer",
    isligt: false,
  },
];

export const sideProducts = [
  {
    id: 1,
    title: "Buy Men's Footwear with low price",
    price: "₹1500",
    image: "/assets/images/sleepers.png",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Buy Apple Iphone",
    price: "₹45000",
    image: "/assets/images/phone.png",
    bgColor: "bg-green-100",
  },
];

export const products = [
  {
    id: 1,
    title: "Buy women products with low price",
    price: "₹999",
    image: "/assets/images/pro1.png",
    bgColor: "bg-[#dbdcf1]",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "Buy Men's Bags with low price",
    price: "₹900",
    image: "/assets/images/pro2.png",
    bgColor: "bg-[#f4ecdf]",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    title: "Buy Apple Iphone",
    price: "₹45000",
    image: "/assets/images/pro3.png",
    bgColor: "bg-[#b3dcca]",
    textColor: "text-gray-800",
  },
  {
    id: 4,
    title: "Buy Men's Footwear with low price",
    price: "₹1500",
    image: "/assets/images/pro4.png",
    bgColor: "bg-[#dceef9]",
    textColor: "text-gray-800",
  },
];

export const blogsData = [
  {
    id: 1,
    imgUrl: "./assets/images/blog1-img.jpg",
    title: "sustainable living through cutting-edge prefabricated homes",
    description: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
    LinkText: "Read More"
  },
  {
    id: 2,
    imgUrl: "./assets/images/blog2-img.jpg",
    title: "Explore sustainable living through cutting-edge prefabricated homes",
    description: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
    LinkText: "Read More"
  },
  {
    id: 3,
    imgUrl: "./assets/images/blog3-img.jpg",
    title: "This prefabrice passive house is highly sustainable",
    description: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
    LinkText: "Read More"
  },
  {
    id: 4,
    imgUrl: "./assets/images/blog4-img.jpg",
    title: "This prefabrice passive house is memorable highly sustainable",
    description: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
    LinkText: "Read More"
  },
]


export const footerData = [
  {
    heading: "Products",
    bullets: [
      {
        linkText: "Prices drop",
        textLink: "/"
      },
      {
        linkText: "New products",
        textLink: "/"
      },
      {
        linkText: "Best sales",
        textLink: "/"
      },
      {
        linkText: "Contact us",
        textLink: "/"
      },
      {
        linkText: "Sitemap",
        textLink: "/"
      },
      {
        linkText: "Stores",
        textLink: "/"
      },
    ]
  },
  {
    heading: "Our company",
    bullets: [
      {
        linkText: "Delivery",
        textLink: "/"
      },
      {
        linkText: "Legal Notice",
        textLink: "/"
      },
      {
        linkText: "Terms and conditions of use",
        textLink: "/"
      },
      {
        linkText: "About us",
        textLink: "/"
      },
      {
        linkText: "Secure payment",
        textLink: "/"
      },
      {
        linkText: "Login",
        textLink: "/"
      },
    ]
  },
]

