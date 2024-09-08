import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const CTPagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("flex w-full justify-center", className)}
    {...props}
  />
);
CTPagination.displayName = "CTPagination";

const CTPaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
CTPaginationContent.displayName = "CTPaginationContent";

const CTPaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
CTPaginationItem.displayName = "CTPaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const CTPaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
CTPaginationLink.displayName = "CTPaginationLink";

const CTPaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof CTPaginationLink>) => (
  <CTPaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4 color-foreground" />
  </CTPaginationLink>
);
CTPaginationPrevious.displayName = "CTPaginationPrevious";

const CTPaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof CTPaginationLink>) => (
  <CTPaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <ChevronRightIcon className="h-4 w-4 color-foreground" />
  </CTPaginationLink>
);
CTPaginationNext.displayName = "CTPaginationNext";

const CTPaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
CTPaginationEllipsis.displayName = "CTPaginationEllipsis";

export {
  CTPagination,
  CTPaginationContent,
  CTPaginationLink,
  CTPaginationItem,
  CTPaginationPrevious,
  CTPaginationNext,
  CTPaginationEllipsis,
};
