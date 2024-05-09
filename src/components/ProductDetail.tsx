import { ProductTypes, ProductsType, formatAsDollars } from "@/utils/types";

import { Button } from "./ui/button";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useState } from "react";

function ProductDetail() {
  const { data }: { data: ProductTypes } = useLoaderData();
  const [colorSelect, setColorSelect] = useState(1);
  return (
    <main className="align-element py-14 grid gap-y-4 sm:grid-cols-2 md:gap-x-14">
      <section className={"mb-4 md:mb-0"}>
        <img
          src={data.attributes.image}
          alt={data.attributes.description}
          className="rounded-md w-96 h-96 lg:w-full"
        />
      </section>
      <section className="flex flex-col gap-y-5 capitalize">
        <h3 className="font-bold text-xl">{data.attributes.title}</h3>
        <h4 className="font-semi tracking-wide">{data.attributes.company}</h4>
        <Button asChild className="self-start" variant={"secondary"}>
          <h5>{formatAsDollars(data.attributes.price)}</h5>
        </Button>
        <p className="leading-9 ">{data.attributes.description}</p>
        <h4 className={"font-bold tracking-wide"}>colors</h4>
        <section className={"flex space-x-2"}>
          {data.attributes.colors.map((color, i) => {
            return (
              <div
                key={color}
                style={{ backgroundColor: `${color}` }}
                className={`w-6 h-6 rounded-full cursor-pointer ${colorSelect === i + 1 && "border-2 border-primary border-solid"}`}
                onClick={() => {
                  setColorSelect(i + 1);
                }}
              />
            );
          })}
        </section>
        <h4 className={"font-bold"}>Amount: </h4>
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select a amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from({ length: 6 }, (_, i) => {
                return (
                  <SelectItem value={String(i + 1)} key={i}>
                    {i + 1}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className={"w-32"}>Add to bag</Button>
      </section>
    </main>
  );
}
export async function loader({ params }): Promise<ProductsType> {
  const { id } = params;
  const response = await axios.get(
    `https://strapi-store-server.onrender.com/api/products/${id}`,
  );

  return response.data;
}
export default ProductDetail;
