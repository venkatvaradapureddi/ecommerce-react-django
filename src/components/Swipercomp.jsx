import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

function Swipercomp() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="custom-swiper"
    >
      <SwiperSlide>
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63923663110174.jpg" alt="Slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63923663175710.jpg" alt="Slider 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63923663568926.jpg" alt="Slider 3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swipercomp;
