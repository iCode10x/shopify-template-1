'use client'
import HomeSlider2Item from './homeSlider2_item'
import { HomeSlider2Data } from '@/utils/dummyData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
const HomeSlider2 = () => {
  return (
    <div className="mt-[60px]">
      <Swiper
        rewind={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
      >
        {HomeSlider2Data.map((item, index) => (
          <SwiperSlide key={index} className="">
            <HomeSlider2Item {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeSlider2
