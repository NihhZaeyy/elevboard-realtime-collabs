import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface ArrowProps {
  className?: string;
  user: string;
  color: string;
  size: number;
}

export function UserArrow({
  className,
  user = "nizar",
  color = "black",
  size,
}: ArrowProps) {
  return (
    <div
      className={cn("flex items-center gap-2 relative w-20 h-20", className)}
    >
      <svg
        width={size}
        height={(size * 150) / 200}
        viewBox="0 0 200 150"
        className={cn("absolute bottom-1 right-1 rotate-145", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100 10 L 180 130 Q 100 80 20 130 Z"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <div
        data-slot="label"
        className={cn(`px-2 py-1 rounded-xl bg-[#A020F0] text-white `)}
      >
        <span>{user}</span>
      </div>
    </div>
  );
}
