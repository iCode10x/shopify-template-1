'use client'
import Link from 'next/link'
import { AiOutlineDown } from 'react-icons/ai'
import {
  byRoomData,
  byTypesData,
  byStyleData,
  moreOptions,
} from '@/utils/navItemsData'
import { useState } from 'react'
const NavItems = () => {
  const [openRoom, setOpenRoom] = useState(false)
  const [openMore, setOpenMore] = useState(false)
  return (
    <div className="flex items-center gap-[40px] text-[18px] font-medium">
      <Link href="/">
        <p>Home</p>
      </Link>
      <div
        className="relative py-4"
        onMouseLeave={() => setOpenRoom(false)}
        onMouseEnter={() => setOpenRoom(true)}
      >
        <p className="text-slate-700 cursor-pointer flex items-center gap-1">
          Catalog <AiOutlineDown size={15} />
        </p>
        {openRoom && (
          <div className="absolute top-[59px] -left-[200px] border flex justify-between p-[16px] w-[460px] bg-gray-50">
            <div>
              <span className="py-[6px] border-b border-black">Room</span>
              <div className="mt-4 flex flex-col gap-1">
                {byRoomData.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <p className="text-slate-600 hover:text-slate-500">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="py-[6px] border-b border-black">Types</span>
              <div className="mt-4 flex flex-col gap-1">
                {byTypesData.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <p className="text-slate-600 hover:text-slate-500">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="py-[6px] border-b border-black">Styles</span>
              <div className="mt-4 flex flex-col gap-1">
                {byStyleData.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <p className="text-slate-600 hover:text-slate-500">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Link href="#">
        <p>Collections</p>
      </Link>
      <div
        className="relative py-4"
        onMouseLeave={() => setOpenMore(false)}
        onMouseEnter={() => setOpenMore(true)}
      >
        <p className="text-slate-700 flex gap-1 items-center">
          More <AiOutlineDown size={15} />
        </p>
        {openMore && (
          <div
            onMouseLeave={() => setOpenMore(false)}
            className="absolute top-[59px] -left-[20px] border flex justify-between p-[16px] w-[100px] bg-gray-50"
          >
            <div className="flex flex-col gap-1">
              {moreOptions.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p className="text-slate-600 hover:text-slate-500">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavItems
