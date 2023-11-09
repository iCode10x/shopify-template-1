import HomeFeatures2Item from './homeFeatures2Item'

const HomemFeatures2 = () => {
  return (
    <div className="my-[50px] flex justify-between flex-wrap gap-[25px]">
      <HomeFeatures2Item
        imgUrl="/room-1.jpg"
        price={120.0}
        heading="High Quality Furniture for Room"
      />
      <HomeFeatures2Item
        imgUrl="/room-2.jpg"
        price={120.0}
        heading="High Quality Furniture for Room"
      />
      <HomeFeatures2Item
        imgUrl="/room-3.jpg"
        price={120.0}
        heading="High Quality Furniture for Room"
      />
    </div>
  )
}

export default HomemFeatures2
