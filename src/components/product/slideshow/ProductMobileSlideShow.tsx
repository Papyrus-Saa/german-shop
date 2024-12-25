"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

interface Props {
  images?: string[];
  title?: string;
  className?: string;
}

const ProductMobileSlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        autoplay={{
          delay: 5000,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {images?.map((img) => (
          <SwiperSlide key={img}>
            <Image
              className="object-fill"
              src={`/products/${img}`}
              alt={title || "product-img"}
              fill={true} // Reemplaza width y height con fill
              style={{
                objectFit: "cover", // Asegura que la imagen mantenga su proporción al rellenar el contenedor
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductMobileSlideShow;
