import { AiOutlineCreditCard } from 'react-icons/ai'
import { TfiPackage } from 'react-icons/tfi'
import { BsWallet, BsCoin } from 'react-icons/bs'
import { BiMessageMinus } from 'react-icons/bi'

function Feature({
  children,
  label1,
  label2,
}: {
  children: React.ReactNode
  label1: string
  label2: string
}) {
  return (
    <div className="flex flex-col items-center w-[230px]">
      {children}
      <p className="text-[20px] font-medium mt-[18px] mb-[2px]">{label1}</p>
      <p className="text-[19px] text-black/70">{label2}</p>
    </div>
  )
}
const HomeFeatures = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-wrap mt-[80px] justify-between max-sm:w-[230px] w-full max-sm:gap-[24px]">
        <Feature label1="Free Shipping" label2="Orders from all item.">
          <TfiPackage size={44} className="hover:text-red-600" />
        </Feature>
        <Feature label1="Flexible Payment" label2="Pay with multiple cards.">
          <AiOutlineCreditCard size={44} className="hover:text-red-600" />
        </Feature>
        <Feature label1="Easy Return Policy" label2="If goods have problems.">
          <BsWallet size={44} className="hover:text-red-600" />
        </Feature>
        <Feature label1="Customer Service" label2="We support online all days.">
          <BiMessageMinus size={44} className="hover:text-red-600" />
        </Feature>
        <Feature label1="Member Discount" label2="On every order over $120.">
          <BsCoin size={44} className="hover:text-red-600" />
        </Feature>
      </div>
    </div>
  )
}

export default HomeFeatures
