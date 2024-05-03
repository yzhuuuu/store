import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import { imageLinks } from "@/utils/types.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";

function HeroCarousel() {
  return (
    <div className={"hidden md:block"}>
      <Carousel>
        <CarouselContent>
          {imageLinks.map((link) => {
            return (
              <CarouselItem key={link}>
                <Card>
                  <CardContent className={"p-1"}>
                    <img
                      src={link}
                      alt="furniture"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
