import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { ProductsType } from "@/utils/types.ts";
import { useState } from "react";

function PaginationContainer() {
  const { meta } = useLoaderData() as ProductsType;
  const pagination = meta.pagination;
  const { page, pageCount } = pagination;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState(page);
  const [, setSearchParams] = useSearchParams();
  function handleNext() {
    if (currentPage + 1 > pageCount) {
      return;
    }

    setCurrentPage(currentPage + 1);
    setSearchParams({ page: String(currentPage + 1) });
  }
  function handlePrevious() {
    if (currentPage - 1 < 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
    setSearchParams({ page: String(currentPage - 1) });
  }
  function handleChange(index: number) {
    setCurrentPage(index);
    setSearchParams({ page: String(index) });
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={handlePrevious} className={"cursor-pointer"}>
          <PaginationPrevious />
        </PaginationItem>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((i) => {
          return (
            <PaginationItem key={i} className={"cursor-pointer"}>
              <PaginationLink isActive={currentPage === i}>
                <span onClick={() => handleChange(i)}>{i}</span>
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem onClick={handleNext} className={"cursor-pointer"}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationContainer;
