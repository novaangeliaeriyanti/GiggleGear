import CarouselV2 from "@/components/CaarouselV2";
import Carousel from "@/components/Carousel";
import EventProducts from "@/components/EventProducts";
import ProductList from "@/components/ProductList";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="flex flex-col gap-3 md:gap-12 lg:gap-12">
      {/* <div className="relative aspect-[3/1] mb-12">
        <Image src="/Banner_Shop.jpg" alt="Banner Product" fill />
      </div> */}
      {/* <Carousel/> */}
      <CarouselV2 />
      <EventProducts/>
      <ProductList category={category} params="homepage"/>
      <VideoSection />
    </div>
  );
};

export default Homepage;