import { ClipboardPenLine } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flex gap-1 justify-center items-center">
        <div className="p-2 bg-[#FFDE63] rounded-lg">
          <ClipboardPenLine strokeWidth={3} />
        </div>
        <span className="text-xl font-bold">ElevBoard</span>
      </div>
    </>
  );
};

export default Logo;
