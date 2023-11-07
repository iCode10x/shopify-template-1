import HomeFeatures from '@/components/homeFeatures'
import HomeSlider1 from '@/components/homeSlider1'

const Home = () => {
  return (
    <div className="">
      <HomeSlider1 />
      <div className="px-[40px]">
        <HomeFeatures />
      </div>
    </div>
  )
}
export default Home
