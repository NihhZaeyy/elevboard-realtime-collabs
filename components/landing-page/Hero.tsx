import React from "react";
import { ClipboardPenLine } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UserArrow } from "../ui/elements/user-arrow";

const Hero = () => {
  return (
    <section className="bg-dot-pattern w-screen h-screen flex gap-10 justify-center items-center">
      <div>
        <UserArrow color="#A020F0" user="Nizar" size={24} />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-5xl">Elevate Your Ideas with</h1>
          <div className="flex gap-1 justify-center items-center">
            <div className="p-2 bg-[#FFDE63] rounded-lg">
              <ClipboardPenLine strokeWidth={3} />
            </div>
            <span className="text-5xl">ElevBoard</span>
          </div>
        </div>
        <p className="text-muted-foreground text-xl">
          Visualize, organize, and collaborate in real-time — all in one
          powerful board made for modern teams.
        </p>
        <div className="flex w-full max-w-sm items-center gap-2 mt-8">
          <Input
            type="email"
            placeholder="Enter your work email"
            className="bg-white h-10"
          />
          <Button type="submit" variant="blue" size={"lg"}>
            Sign up free
          </Button>
        </div>
      </div>
      <div>
        <UserArrow color="#A020F0" user="Nizar" size={24} />
      </div>
    </section>
  );
};

export default Hero;
