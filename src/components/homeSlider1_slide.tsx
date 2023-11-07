import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  heading: string
  price: number
  imageSrc: string
  bgColor: string
}

const HomeSlider1Item = ({ heading, price, imageSrc, bgColor }: Props) => {
  return (
    <div
      className={`w-full bg-[${bgColor}] flex items-center gap-[20px] sm:gap-[50px] md:gap-[100px] 2xl:gap-[200px] px-[20px] md:px-[50px]`}
    >
      <div>
        {bgColor}
        <h2 className="text-[13px] sm:text-[16px] md:text-[20px] 2xl:text-[24px]">
          100% Original Products
        </h2>
        <h1 className="text-[18px] sm:text-[25px] md:text-[55px] 2xl:text-[66px]">
          {heading}
        </h1>
        <p className="text-[20px] md:text-[25px] max-sm:hidden">
          This Month From
          <span className="text-red-500 text-[25px] md:text-[32px] font-medium ml-2">
            ${price}
          </span>
        </p>
        <button className="max-sm:hidden bg-[#333333] py-[14px] px-[34px] font-medium text-white mt-[40px]">
          Shop Now
        </button>
        <Link href="#" className="sm:hidden">
          <p className="text-[13px] font-medium underline mt-[10px]">
            Shop Now
          </p>
        </Link>
      </div>
      <Image
        src={imageSrc}
        alt="sofa"
        width={1920}
        height={1080}
        quality={100}
        className="w-[200px] h-[150px] sm:w-[450px] sm:h-[350px] md:w-[650px] md:h-[550px] 2xl:w-[850px] 2xl:h-[750px]"
      />
    </div>
  )
}

export default HomeSlider1Item
