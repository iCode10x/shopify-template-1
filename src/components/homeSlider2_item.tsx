type Props = {
  imgUrl: string
  label: string
  link: string
}
import Image from 'next/image'
import Link from 'next/link'
const HomeSlider2Item = ({ imgUrl, label, link }: Props) => {
  return (
    <Link href={link}>
      <div className="relative group">
        <Image
          src={imgUrl}
          alt="image"
          width={1366}
          height={768}
          quality={100}
          className="w-[250px] h-[150px] sm:w-[350px] sm:h-[250px] 2xl:w-[450px] 2xl:h-[350px] object-cover"
        />
        <div className="absolute top-0 w-full flex justify-center items-end h-full bg-transparent">
          <p className="text-center py-[5px] mb-4 w-[85%] sm:py-[10px] bg-white text-black text-[16px] sm:text-[20px] font-medium group-hover:bg-[#222222] group-hover:text-white transition-all ease-in-out">
            {label}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default HomeSlider2Item
