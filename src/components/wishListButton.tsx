import { AiOutlineHeart } from 'react-icons/ai'
const WishListButton = () => {
  return (
    <div className="relative">
      <AiOutlineHeart size={28} />
      <span className="absolute -top-2 -right-2 bg-black text-white text-[13px] w-[20px] h-[20px] font-semibold flex justify-center items-center rounded-full">
        {6}
      </span>
    </div>
  )
}

export default WishListButton
