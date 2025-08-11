import Carousel from "@/components/Carousel";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      {/* <div className="relative aspect-[3/1] mb-12">
        <Image src="/Banner_Shop.jpg" alt="Banner Product" fill />
      </div> */}
      <Carousel/>
      <ProductList category={category} params="homepage"/>
    </div>
  );
};

export default Homepage;