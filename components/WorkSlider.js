// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title1: 'GARAGE',
          title2: 'PULSE',
          path: '/pro4.webp',
          link: 'https://dctech.space/home',
        },
        {
          title1: 'EVENT',
          path: '/pro1.webp',
          title2: 'ZONE',
        },
        {
          title1: 'CHRISTMAS',
          title2: 'BOUTIQUE',
          path: '/pro2.webp',
        },
        {
          title1: 'DEEM',
          title2: '',
          path: '/pro3.webp',
        },
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
                  <a
                    key={i}
                    href={image.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="w-full aspect-video flex items-center justify-center relative overflow-hidden group rounded-lg">
                      {/* images  */}
                      <Image
                        src={image.path}
                        alt="work image"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      ></Image>
                      {/* tittle */}
                      <div className='glass-sm rounded-none border-x-0 border-b-0 absolute inset-x-0 bottom-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-accent'>
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
                  </a>
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

