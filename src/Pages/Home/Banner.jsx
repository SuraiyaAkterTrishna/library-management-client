import img1 from "../../assets/images/slider1.jpg";
import img2 from "../../assets/images/slider2.jpg";
import img3 from "../../assets/images/slider3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="slide1" className="relative w-full">
            <img src={img1} className="w-full rounded-xl" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="absolute rounded-xl flex justify-center items-center h-full left-50 top-0 ">
                <div className="text-white w-2/3 text-center pl-24">
                  <h2 className="text-6xl font-bold mb-4">
                    We believe in books for a cause
                  </h2>
                  <p>
                    Books are always filled with fun and interesting facts.
                    Whether you read fiction or non-fictions, books have the
                    ability to provide us with information we would’ve otherwise
                    not known.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide2" className="relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="absolute rounded-xl flex justify-center items-center h-full left-50 top-0 ">
                <div className="text-white w-2/3 text-center pl-24">
                  <h2 className="text-6xl font-bold mb-4">
                    Books are the best and wonderful gift ever
                  </h2>
                  <p>
                    Books are always filled with fun and interesting facts.
                    Whether you read fiction or non-fictions, books have the
                    ability to provide us with information we would’ve otherwise
                    not known.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide3" className="relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="absolute rounded-xl flex justify-center items-center h-full left-50 top-0 ">
                <div className="text-white w-2/3 text-center pl-24">
                  <h2 className="text-6xl font-bold mb-4">
                    Gift your family and friends a best book
                  </h2>
                  <p>
                    Books are always filled with fun and interesting facts.
                    Whether you read fiction or non-fictions, books have the
                    ability to provide us with information we would’ve otherwise
                    not known.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
