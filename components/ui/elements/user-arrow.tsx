import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface ArrowProps {
  className?: string;
  user: string;
  size: number;
}

const arrowDirectionVariants = cva("absolute", {
  variants: {
    direction: {
      upleft: "top-2 left-0 -rotate-45",
      upright: "top-2 right-0 rotate-45",
      bottomleft: "bottom-2 left-0 -rotate-145",
      bottomright: "bottom-2 right-1 rotate-145",
    },
  },
  defaultVariants: {
    direction: "bottomright",
  },
});

const arrowVariants = cva("px-2 py-1 rounded-xl", {
  variants: {
    variant: {
      purple: "bg-purple-200 border-2 border-purple-700 text-purple-700",
      green: "bg-green-200 border-2 border-green-700 text-green-700",
      amber: "bg-amber-200 border-2 border-amber-700 text-amber-700",
      blue: "bg-blue-200 border-2 border-blue-700 text-blue-700",
    },
  },
  defaultVariants: {
    variant: "purple",
  },
});

const variantColors = {
  purple: {
    fill: "rgba(167, 139, 250, 0.6)",
    stroke: "#6B21A8",
  },
  green: {
    fill: "rgba(134, 242, 172, 0.6)",
    stroke: "#15803D",
  },
  amber: {
    fill: "rgba(251, 191, 36, 0.6)",
    stroke: "#B45309",
  },
  blue: {
    fill: "rgba(96, 165, 250, 0.6)",
    stroke: "#1D4ED8",
  },
};

export function UserArrow({
  className,
  user = "user",
  size,
  direction,
  variant,
}: ArrowProps &
  VariantProps<typeof arrowDirectionVariants> &
  VariantProps<typeof arrowVariants>) {
  const colors = variantColors[variant ?? "purple"];
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 relative w-max px-4 h-20",
        className
      )}
    >
      <svg
        width={size}
        height={(size * 150) / 200}
        viewBox="0 0 200 150"
        className={cn(arrowDirectionVariants({ direction }))}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100 10 L 180 130 Q 100 80 20 130 Z"
          fill={colors.fill}
          stroke={colors.stroke}
          strokeWidth="6"
        />
      </svg>
      <div data-slot="label" className={cn(arrowVariants({ variant }))}>
        <span>{user}</span>
      </div>
    </div>
  );
}
