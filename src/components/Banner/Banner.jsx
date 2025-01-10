// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="px-5 lg:px-0 -mt-2 mb-8">
      <Swiper
        rewind={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // modules={[Navigation]}
        // Autoplay,
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[380px] lg:h-[460px] rounded-lg hero bg-[url(https://i.ibb.co.com/NC9dVs2/Oldowan-tools-696x397-jpg.webp)] bg-cover bg-no-repeat bg-center">
            <div className="hero-overlay bg-opacity-40 rounded-lg">
              <div className="px-12 lg:px-16 border-0 md:w-3/4 lg:w-1/2 flex flex-col gap-5 justify-center items-start border-black h-full rounded-lg">
                <h1 className="font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-white">
                  Oldowan Tools
                </h1>
                <p className="text-base lg:text-lg text-gray-50 line-clamp-5 md:line-clamp-none">
                  Oldowan tools are a type of stone tool associated with an archaeological tradition named after the Olduvai Gorge in Tanzania, where these tools were first discovered. The Oldowan tool tradition is one of the earliest stone tool industries and is associated with the early part of the Paleolithic period.
                </p>
                <div className="">
                  <button className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 font-bold">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[380px] lg:h-[460px] rounded-lg hero bg-[url(https://i.ibb.co.com/4KrZTtY/Lomekwi-Stone-Tools-696x522.webp)] bg-cover bg-no-repeat bg-center">
            <div className="hero-overlay bg-opacity-40 rounded-lg">
              <div className="px-12 lg:px-16 border-0 md:w-3/4 lg:w-3/5 flex flex-col gap-5 justify-center items-start border-black h-full rounded-lg">
                <h1 className="font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-white">
                  Lomekwi Stone Tools
                </h1>
                <p className="text-base lg:text-lg text-gray-50 line-clamp-5 md:line-clamp-none">
                  The Lomekwi Stone Tools are a collection of ancient stone tools found at the Lomekwi 3 excavation site in Kenya. These tools are believed to be the oldest known evidence of stone tools, dating back approximately 3.3 million years ago.
                </p>
                <div className="">
                  <button className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 font-bold">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[380px] lg:h-[460px] rounded-lg hero bg-[url(https://i.ibb.co.com/4mKnCx5/El-Castillo-Cave-696x464-jpg.webp)] bg-cover bg-no-repeat bg-center">
            <div className="hero-overlay bg-opacity-40 rounded-lg">
              <div className="px-12 lg:px-16 border-0 md:w-3/4 lg:w-3/5 flex flex-col gap-5 justify-center items-start border-black h-full rounded-lg">
                <h1 className="font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-white">
                  El Castillo Cave Paintings
                </h1>
                <p className="text-base lg:text-lg text-gray-50 line-clamp-5 md:line-clamp-none">
                  El Castillo Cave Paintings is a collection of prehistoric art discovered in the Cave of El Castillo in Cantabria, Spain. The paintings are believed to be at least 40,800 years old, making them one of the oldest known cave art in the world. The cave was discovered in 1903 by Hermilio Alcalde del Río, a Spanish archaeologist.
                </p>
                <div className="">
                  <button className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 font-bold">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;


// https://i.ibb.co.com/4mKnCx5/El-Castillo-Cave-696x464-jpg.webp
// https://i.ibb.co.com/4KrZTtY/Lomekwi-Stone-Tools-696x522.webp
// https://i.ibb.co.com/NC9dVs2/Oldowan-tools-696x397-jpg.webp