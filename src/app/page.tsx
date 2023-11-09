import HomeFeatures from '@/components/homeFeatures'
import HomeProductsSection from '@/components/homeProductsSection'
import HomeSlider1 from '@/components/homeSlider1'
import HomeSlider2 from '@/components/homeSlider2'
import HomemFeatures2 from '@/components/homeFeatures2'
const Home = () => {
  return (
    <div className="">
      <HomeSlider1 />
      <div className="px-[20px] sm:px-[40px] 2xl:px-[100px]">
        <HomeFeatures />
        <HomeSlider2 />
        <HomeProductsSection />
        <HomemFeatures2 />
      </div>
    </div>
  )
}
export default Home
