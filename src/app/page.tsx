"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-[#00E500] [text-shadow:_0_0_5px_rgb(0_229_0_/_50%),_0_0_15px_rgb(0_229_0_/_30%)] font-mono p-4">
      <div className="container mx-auto">
        <Link href="/" className="absolute top-4 text-xl md:text-2xl font-bold tracking-widest">
          wDrones
        </Link>
      </div>
      {!response && (
        <>
          <div className="w-fit mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_1.25s_steps(23),blink_1s_step-end_infinite]">
              Do you want a drone?
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
            <Button variant="hacker" size="hacker" className="text-lg md:text-xl px-6 md:px-8" onClick={() => setResponse("Yes.")}>Yes.</Button>
            <Button variant="hacker" size="hacker" className="text-lg md:text-xl px-6 md:px-8" onClick={() => setResponse("YES!")}>YES!</Button>
          </div>
          <div className="w-fit mt-12">
            <Link href="/about" className="text-sm md:text-base px-6 md:px-8 transition-all duration-200 hover:underline hover:underline-offset-4 hover:[text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">huh?</Link>
          </div>
        </>
      )}
      {response && (
        <>
          {response === "Yes." && (
            <div className="w-fit">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.75s_steps(10),blink_1s_step-end_infinite]">
                I got you!
              </h1>
            </div>
          )}
          {response === "YES!" && (
            <div className="w-fit">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_1.25s_steps(20),blink_1s_step-end_infinite]">
                {"Someone's excited :)"}
              </h1>
            </div>
          )}
          <Button className="mt-8 text-lg md:text-xl px-6 md:px-8" variant="hacker" size="hacker" onClick={() => window.open("https://wa.me/16139860904")}>
            Text me!
          </Button>
        </>
      )}
    </div>
  );
}

