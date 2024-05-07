import Hero from "@/components/Hero.tsx";
import HeroCarousel from "@/components/HeroCarousel.tsx";
import FeaturedProducts from "@/components/FeaturedProducts.tsx";
import { useLoaderData } from "react-router-dom";
import { FeaturedProductsType } from "@/utils/types.ts";

function Landing() {
  const loaderData = useLoaderData() as FeaturedProductsType;
  const { data } = loaderData;
  return (
    <main className={"align-element py-24"}>
      <section className={"md:grid md:grid-cols-2 gap-24 items-center mb-24"}>
        <Hero />
        <HeroCarousel />
      </section>
      <FeaturedProducts products={data} />
    </main>
  );
}
export async function loader(): Promise<FeaturedProductsType> {
  const response = await fetch(
    "https://strapi-store-server.onrender.com/api/products?featured=true",
  );
  return await response.json();
}
export default Landing;
