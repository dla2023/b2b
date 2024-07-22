"use client";

import { FC, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import classNames from "classnames";
import { shallowUrlUpdate } from "@/utils/shallowUrlUpdate";
import { ELEMENTS_PER_PAGE } from "@/constants";

interface PaginationProps {
  disabled: boolean;
  limit: string;
  onChange: (limit: number) => Promise<void>;
}

export const Pagination: FC<PaginationProps> = ({
  onChange,
  limit: limitProp,
  disabled = false,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();


  useEffect(() => {
    search.set("limit", limit);
    shallowUrlUpdate(`${pathname}?${search}`);
    // no need more deps
  }, [])

  const search = new URLSearchParams(Array.from(searchParams.entries()));

  const [limit, setLimit] = useState(limitProp);

  const handleChangePage = () => {
    let newLimit = ELEMENTS_PER_PAGE;
    if (limit) {
      const limitNumber = parseInt(limit);

      if (limitNumber) {
        newLimit = limitNumber + ELEMENTS_PER_PAGE;
      }
    } else {
      newLimit = ELEMENTS_PER_PAGE * 2;
    }

    onChange(newLimit).then(() => {
      search.set("limit", newLimit?.toString());
      setLimit(newLimit?.toString());
      shallowUrlUpdate(`${pathname}?${search}`);
    });
  };

  return (
    <button
      onClick={handleChangePage}
      className={classNames(
        disabled && "pointer-events-none text-gray-500",
        "hover:underline",
      )}
    >
      Load More
    </button>
  );
};
