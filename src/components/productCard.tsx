'use client'
import {
  BsSuitHeart,
  BsSuitHeartFill,
  BsArrowsFullscreen,
} from 'react-icons/bs'
import { ProductType } from '@/Types'
import { AiFillStar } from 'react-icons/ai'
import { PiStackLight, PiStackFill } from 'react-icons/pi'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
const ProductCard = ({
  brand,
  imgUrl,
  hoverImgUrl,
  label,
  stars,
  price,
  oldPrice,
}: ProductType) => {
  const [cardHovered, setCardHovered] = useState(false)
  const [liked, setLiked] = useState(false)
  const [compare, setCompare] = useState(false)
  const [starsArray, setstarsArray] = useState<number[]>([1, 2, 3, 4, 5])

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="relative"
    >
      <Image
        src={`${cardHovered ? `${hoverImgUrl}` : `${imgUrl}`}`}
        alt="image"
        width={600}
        height={400}
        quality={100}
        className="w-[270px] h-[300px] object-cover"
      />
      {cardHovered && (
        <div className="absolute right-2 top-2 flex flex-col gap-[8px]">
          {liked ? (
            <button
              onClick={() => setLiked(false)}
              className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white"
            >
              <BsSuitHeartFill size={20} />
            </button>
          ) : (
            <button
              onClick={() => setLiked(true)}
              className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white"
            >
              <BsSuitHeart size={20} />
            </button>
          )}
          {compare ? (
            <button
              onClick={() => setCompare(false)}
              className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white"
            >
              <PiStackFill size={20} />
            </button>
          ) : (
            <button
              onClick={() => setCompare(true)}
              className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white"
            >
              <PiStackLight size={20} />
            </button>
          )}
          <button className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white">
            <BsArrowsFullscreen size={19} />
          </button>
        </div>
      )}
      <div className="mt-[16px]">
        <p className="text-gray-600">{brand}</p>
        <p className="text-[18px] mt-[5px]">{label}</p>
        <div className="flex items-center text-yellow-500 my-2">
          {starsArray.map((item, index) => (
            <AiFillStar key={index} size={16} />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          {oldPrice && (
            <p className="text-[19px] text-gray-800 line-through">
              ${oldPrice}.00
            </p>
          )}
          <p className="text-[19px] text-red-500 font-medium">${price}.00</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
