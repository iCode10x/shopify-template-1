'use client'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { useRef } from 'react'
import 'swiper/css'
import Link from 'next/link'
import HomeSlider1Item from './homeSlider1_slide'
const HomeSlider1 = () => {
  const swiperRef = useRef<SwiperType>()
  return (
    <div className="relative">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="bg-white py-[20px] px-[20px] text-white absolute top-[60%] left-[20px] z-10 rounded-full max-md:hidden"
      >
        <BsArrowLeft size={20} className="text-black" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="bg-white py-[20px] px-[20px] text-white absolute top-[60%] right-[20px] z-10 rounded-full   max-md:hidden"
      >
        <BsArrowRight size={20} className="text-black" />
      </button>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        rewind={true}
      >
        <SwiperSlide>
          <HomeSlider1Item
            heading="Comfortable orange couch"
            price={59.0}
            imageSrc="/sofa.jpg"
            bgColor="#EEE5E4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSlider1Item
            heading="Special Fluffy Comfy White Bed"
            price={79.0}
            imageSrc="/bed.jpg"
            bgColor="#E3E7ED"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider1
