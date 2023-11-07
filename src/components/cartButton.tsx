import { PiShoppingBag } from 'react-icons/pi'
const CartButton = () => {
  return (
    <div className="relative flex gap-2 items-center">
      <PiShoppingBag size={28} />
      <span className="absolute -top-2 -right-[10px] lg:right-[55px] bg-black text-white text-[13px] w-[20px] h-[20px] font-semibold flex justify-center items-center rounded-full">
        {3}
      </span>
      <span className="font-medium max-sm:hidden ">$23.44</span>
    </div>
  )
}

export default CartButton
