import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "@/components/FormInput.tsx";
import FormSelect from "@/components/FormSelect.tsx";
import { Params, ProductsType } from "@/utils/types.ts";
import { Button } from "@/components/ui/button.tsx";

function FilterContainer() {
  const { meta, params } = useLoaderData() as ProductsType & { params: Params };
  const { order, search, category, company } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}

      <FormInput
        type="search"
        labelText="search product"
        name="search"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        labelText="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect
        labelText="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      <FormSelect
        labelText="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/*<FormSelect labelText={"order"} />*/}
      <Button type={"submit"}>search</Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="secondary"
        className="bg-accent capitalize p-5"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}

export default FilterContainer;
