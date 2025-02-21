import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Sertificas.module.css";

const Sertificas = () => {
  const settings = {
    dots: window.innerWidth > 640,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const certificates = [
    {
      id: 1,
      image: "/sertifica/sertifica1-1.webp",
      alt: "Sertifika 1",
    },
    {
      id: 2,
      image: "/sertifica/sertifica1-2.webp",
      alt: "Sertifika 2",
    },
    {
      id: 3,
      image: "/sertifica/sertifica2.webp",
      alt: "Sertifika 3",
    },
    {
      id: 4,
      image: "/sertifica/sertifica3.webp",
      alt: "Sertifika 4",
    },
    {
      id: 5,
      image: "/sertifica/sertifica4.webp",
      alt: "Sertifika 5",
    },
    {
      id: 6,
      image: "/sertifica/sertifica5.webp",
      alt: "Sertifika 6",
    },
    {
      id: 7,
      image: "/sertifica/sertifica6.webp",
      alt: "Sertifika 7",
    },
    {
      id: 8,
      image: "/sertifica/sertifica7.webp",
      alt: "Sertifika 8",
    },
  
  ];

  return (
    <div className="container pb-24 mx-auto -mt-10 md:pt-10">
      <h1 className="text-2xl md:text-5xl font-bold p-6 md:mb-10 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent text-center">
        Unsere Zertifikate
      </h1>
      <div className={`w-full ${styles.sliderContainer}`}>
        <Slider {...settings}>
          {certificates.map((certificate) => (
            <div key={certificate.id} className="p-2 sm:p-4 md:p-6">
              <div className="p-2 sm:p-4 transition-all duration-500 transform bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] ">
                <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="object-contain w-full h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sertificas;
