import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles/testimonial.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import star_icon from '../../../assets/icons/star.svg'


export default function Testimonial({ testimonialStatic, linkTestimonial }) {

  return (
    <>
      <div className="mb-5 title-slide" >
        <h3 className="mb-3" ref={linkTestimonial}>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>

      <Swiper

        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}

        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          660: {
            slidesPerView: 1,

          },
          1920: {
            slidesPerView: 3,
          },
        }}

      >


        {testimonialStatic.map((item) => {
          const stars = [];

          for (let i = 0; i < item.star; i++) {
            stars.push(<
              img
              key={i}
              src={star_icon}
              alt="star"
            />
            );
          }


          return (
            <SwiperSlide className="swiper-slide" key={item.id} >
              <div className="main-content" >
                <div className="row">
                  <div className="align-items-center col-md-3 d-flex justify-content-center">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="start">
                      <h4>{stars}</h4>
                    </div>
                    <div className="desc" >
                      <p>"{item.testimonial}"</p>
                    </div>
                    <div className="fullname">
                      <p>
                        {item.name} {item.age}, {item.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </>
  );
}

