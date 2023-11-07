'use client'
import Link from 'next/link'
import { BsJustify, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { byRoomData, byStyleData, byTypesData } from '@/utils/navItemsData'
const MobileNav = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const [showFullMenu, setShowFullMenu] = useState(true)
  const [showCatalogMenu, setShowCatalogMenu] = useState(false)
  const [showRoomMenu, setShowRoomMenu] = useState(false)
  const [showTypesMenu, setShowTypesMenu] = useState(false)
  const [showStylesMenu, setShowStylesMenu] = useState(false)
  return (
    <div className="">
      <button className="mt-1">
        <BsJustify size={25} onClick={() => setOpenMobileNav(true)} />
      </button>
      {openMobileNav && (
        <div className="w-screen h-screen bg-black/30 z-10 absolute top-0 left-0 right-0 border border-red-600">
          <div className="w-[300px] px-[30px] bg-white h-full">
            <div className="py-[16px] flex justify-between items-center border-b">
              <p className="text-[17px] font-medium">MENU</p>
              <AiOutlineClose
                size={22}
                onClick={() => setOpenMobileNav(false)}
                className="cursor-pointer"
              />
            </div>
            {showFullMenu && (
              <div className="mt-[20px] flex flex-col gap-[22px] text-[18px]">
                <Link href="/">
                  <p>Home</p>
                </Link>
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <p>Catalog</p>
                  </Link>
                  <div
                    className="w-full flex justify-end items-center"
                    onClick={() => {
                      setShowFullMenu(false)
                      setShowCatalogMenu(true)
                    }}
                  >
                    <button>
                      <BsArrowRight size={20} />
                    </button>
                  </div>
                </div>
                <Link href="/">
                  <p>Collections</p>
                </Link>
                <Link href="/">
                  <p>Blog</p>
                </Link>
                <Link href="/">
                  <p>Contact</p>
                </Link>
              </div>
            )}
            {showCatalogMenu && (
              <div className="mt-[20px] flex flex-col gap-[22px] text-[18px]">
                <div
                  className="flex items-center gap-3"
                  onClick={() => {
                    setShowCatalogMenu(false)
                    setShowFullMenu(true)
                  }}
                >
                  <BsArrowLeft size={20} />
                  <span>Catalog</span>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <p>Room</p>
                  </Link>
                  <div
                    className="w-full flex justify-end items-center"
                    onClick={() => {
                      setShowCatalogMenu(false)
                      setShowRoomMenu(true)
                    }}
                  >
                    <button>
                      <BsArrowRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <p>Types</p>
                  </Link>
                  <div
                    className="w-full flex justify-end items-center"
                    onClick={() => {
                      setShowCatalogMenu(false)
                      setShowTypesMenu(true)
                    }}
                  >
                    <button>
                      <BsArrowRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <p>Styles</p>
                  </Link>
                  <div
                    className="w-full flex justify-end items-center"
                    onClick={() => {
                      setShowCatalogMenu(false)
                      setShowStylesMenu(true)
                    }}
                  >
                    <button>
                      <BsArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {showRoomMenu && (
              <div className="mt-[20px] flex flex-col gap-[22px] text-[18px] border-b pb-[25px]">
                <div
                  className="flex items-center gap-3"
                  onClick={() => {
                    setShowRoomMenu(false)
                    setShowCatalogMenu(true)
                  }}
                >
                  <BsArrowLeft size={20} />
                  <span>Room</span>
                </div>

                <div className="flex flex-col gap-4">
                  {byRoomData.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <p>{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {showTypesMenu && (
              <div className="mt-[20px] flex flex-col gap-[22px] text-[18px] border-b pb-[25px]">
                <div
                  className="flex items-center gap-3"
                  onClick={() => {
                    setShowTypesMenu(false)
                    setShowCatalogMenu(true)
                  }}
                >
                  <BsArrowLeft size={20} />
                  <span>Types</span>
                </div>
                <div className="flex flex-col gap-4">
                  {byTypesData.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <p>{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {showStylesMenu && (
              <div className="mt-[20px] flex flex-col gap-[22px] text-[18px] border-b pb-[25px]">
                <div
                  className="flex items-center gap-3"
                  onClick={() => {
                    setShowStylesMenu(false)
                    setShowCatalogMenu(true)
                  }}
                >
                  <BsArrowLeft size={20} />
                  <span>Styles</span>
                </div>
                <div className="flex flex-col gap-4">
                  {byStyleData.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <p>{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav
