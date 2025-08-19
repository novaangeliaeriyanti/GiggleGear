import EventProducts from "@/components/EventProducts"
import ProductList from "@/components/ProductList"
import VideoSection from "@/components/VideoSection"
import VoucherBanner from "@/components/VoucherBanner"
import Carousel from "@/sections/homepage1/Carousel"
import Categories from "@/sections/homepage1/Categories"
import ProductsListSection from "@/sections/homepage1/ProductList"
import ServiceHighlights from "@/sections/homepage1/ServiceHighlights"

const Homepage1 = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-12 lg:gap-12">
      <Carousel />
      <ServiceHighlights />
      <EventProducts/>
      <Categories />
      <VoucherBanner />
      <ProductsListSection />
      {/* <ProductList category="" params="homepage"/> */}
      <VideoSection />
  </div>
  )
}

export default Homepage1