import HomeFeatures from '@/components/homeFeatures'
import HomeSlider1 from '@/components/homeSlider1'
import HomeSlider2 from '@/components/homeSlider2'
const Home = () => {
  return (
    <div className="">
      <HomeSlider1 />
      <div className="px-[20px] sm:px-[40px]">
        <HomeFeatures />
        <HomeSlider2 />
      </div>
    </div>
  )
}
export default Home
