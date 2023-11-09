'use client'
import { dummyProducts } from '@/utils/dummyData'
import { useState } from 'react'
import Link from 'next/link'
import ProductCard from './productCard'
const HomeProductsSection = () => {
  const [filter, setFilter] = useState<
    'featured' | 'New Arrivals' | 'Best Seller'
  >('featured')
  return (
    <div>
      <div className="flex justify-between mt-[60px] md:items-center flex-col sm:flex-row">
        <h1 className="text-[42px]">Our Products</h1>
        <div className="max-md:hidden flex gap-[20px]">
          <button
            onClick={() => setFilter('featured')}
            className={`px-[34px] py-[8px] font-medium border  ${
              filter == 'featured' && 'bg-gray-200'
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setFilter('New Arrivals')}
            className={`px-[34px] py-[8px] font-medium border  ${
              filter == 'New Arrivals' && 'bg-gray-200'
            }`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => setFilter('Best Seller')}
            className={`px-[34px] py-[8px] font-medium border  ${
              filter == 'Best Seller' && 'bg-gray-200'
            }`}
          >
            Best Seller
          </button>
        </div>
        <div className="md:hidden flex items-center gap-[20px]">
          <p
            onClick={() => setFilter('featured')}
            className={`py-[2px] font-medium text-[19px] ${
              filter === 'featured' && 'border-b border-black'
            }`}
          >
            Featured
          </p>
          <p
            onClick={() => setFilter('New Arrivals')}
            className={`py-[2px] font-medium text-[19px] ${
              filter === 'New Arrivals' && 'border-b border-black'
            }`}
          >
            New Arrivals
          </p>
          <p
            onClick={() => setFilter('Best Seller')}
            className={`py-[2px] font-medium text-[19px] ${
              filter === 'Best Seller' && 'border-b border-black'
            }`}
          >
            Best Seller
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center mt-[30px]">
        {dummyProducts.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <div className="w-full flex mt-[20px] md:mt-[40px]">
        <Link href="#" className="mx-auto">
          <button className=" border-black border px-[30px] py-[9px] font-medium hover:text-white hover:bg-black transition-all ease-in-out duration-500">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeProductsSection
