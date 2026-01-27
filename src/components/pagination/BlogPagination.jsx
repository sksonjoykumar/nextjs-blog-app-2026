"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

// postPerPage
const postPerPage = 6;

export default function BlogPagination({ safePosts }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;

  const startIndex = (page - 1) * postPerPage;
  const currentBlog = safePosts.slice(startIndex, startIndex + postPerPage);

  const handlePageChange = (page) => {
    router.push(`/blog?page=${page}`);
  };
  console.log(safePosts);
  return (
    <>
      <div className="mt-10">
        <Pagination className="">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(index - 1)}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="hidden sm:flex" href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="hidden sm:flex" href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="hidden sm:flex" href="#">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="hidden sm:flex" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(index + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
