import Hero from "@/components/Hero.tsx";
import HeroCarousel from "@/components/HeroCarousel.tsx";

function Landing() {
  return (
    <main className={"align-element py-24"}>
      <section className={"md:grid md:grid-cols-2 gap-24 items-center"}>
        <Hero />
        <HeroCarousel />
      </section>
    </main>
  );
}

export default Landing;
