import Hero from "@/components/Hero.tsx";
import HeroCarousel from "@/components/HeroCarousel.tsx";
import FeaturedProducts from "@/components/FeaturedProducts.tsx";

function Landing() {
  return (
    <main className={"align-element py-24"}>
      <section className={"md:grid md:grid-cols-2 gap-24 items-center mb-24"}>
        <Hero />
        <HeroCarousel />
      </section>
        <FeaturedProducts/>
    </main>
  );
}

export default Landing;
