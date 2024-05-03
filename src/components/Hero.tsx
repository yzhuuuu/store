import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <h1 className={"font-bold text-4xl mb-4 md:text-6xl"}>
        We are Changing the way people shop
      </h1>
      <p className={"leading-9 mb-7"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        eaque, fugiat odit omnis perspiciatis totam veritatis voluptate! A,
        alias, amet architecto commodi cumque debitis dolore doloremque eos
        exercitationem expedita fuga
      </p>
      <Button size={"lg"}>
        <Link to={"/products"}>Our Products</Link>
      </Button>
    </section>
  );
}

export default Hero;
