// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title1: 'EVENT',
          path: '/pro1.jpg',
          title2: 'ZONE',
        },
        {
          title1: 'CHRISTMAS',
          title2: 'BOUTIQUE',
          path: '/pro2.jpg',
        },
        {
          title1: 'DEEM',
          title2: '',
          path: '/pro3.jpg',
        },
        // {
        //   title: 'title',
        //   path: '/thumb4.jpg',
        // },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

// next Image
import Image from 'next/image'
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { BsArrowRight} from 'react-icons/bs'
//import swiper modules
import { Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {item.images.map((image, i) => {
                return (
                  <div
                    key={i}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* images  */}
                      <Image
                        src={image.path}
                        alt="work image"
                        width={500}
                        height={300}
                      ></Image>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* tittle */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* tittle part 1 */}
                          <div className='delay-100'>{image.title1}</div>

                          {/* tittle part 1 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.title2}</div>

                          {/* icon*/}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
           </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

