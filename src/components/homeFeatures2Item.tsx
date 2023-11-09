import Image from 'next/image'
import Link from 'next/link'
type Props = {
  imgUrl: string
  price: number
  heading: string
}
const HomeFeatures2Item = ({ imgUrl, price, heading }: Props) => {
  return (
    <div className="relative">
      <Image
        src={imgUrl}
        alt="image"
        width={600}
        height={400}
        className="w-[400px] h-[270px] 2xl:w-[500px] 2xl:h-[350px]"
      />
      <div className="absolute top-[16px] 2xl:top-[42px] left-[30px] w-[250px] text-white">
        <p>Flat 20% Discount</p>
        <h1 className="text-[34px] 2xl:text-[40px]">{heading}</h1>
        <p className="text-[18px] 2xl:text-[24px]">
          Starting at{' '}
          <span className="text-red-500 font-medium text-[22px] 2xl:text-[28px]">
            ${price}.00
          </span>
        </p>
        <Link
          href={'#'}
          className="underline font-medium text-[18px] 2xl:text-[22px] hover:no-underline"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default HomeFeatures2Item
