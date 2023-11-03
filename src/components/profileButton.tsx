'use client'
import { IoPersonOutline } from 'react-icons/io5'
import { useState } from 'react'
import Link from 'next/link'
const ProfileButton = () => {
  const [openOptions, setOpenOptions] = useState(false)
  return (
    <div
      className="relative py-4"
      onMouseLeave={() => setOpenOptions(false)}
      onMouseEnter={() => setOpenOptions(true)}
    >
      <div>
        <IoPersonOutline size={28} />
      </div>
      {openOptions && (
        <div className="absolute bg-gray-50 top-[60px] -left-12 w-[140px] border p-4">
          <Link href="#">
            <p>Log in</p>
          </Link>
          <Link href="#">
            <p>Register</p>
          </Link>
          <Link href="#">
            <p>Compare (1)</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ProfileButton
