"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-[#00E500] [text-shadow:_0_0_5px_rgb(0_229_0_/_50%),_0_0_15px_rgb(0_229_0_/_30%)] font-mono">
      <div className="container mx-auto">
        <div className="absolute top-4 text-2xl font-bold tracking-widest">
          wDrones
        </div>
      </div>
      {!response && (
        <>
          <div className="w-fit mb-8">
            <h1 className="text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-green-500 pr-1 animate-[typing_1.5s_steps(25),blink_1s_step-end_infinite]">
              Do you want a drone?
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button variant="hacker" size="hacker" onClick={() => setResponse("Yes.")}>Yes.</Button>
            <Button variant="hacker" size="hacker" onClick={() => setResponse("YES!")}>YES!</Button>
          </div>
        </>
      )}
      {response && (
        <>
          {response === "Yes." && (
            <div className="w-fit">
              <h1 className="text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-green-500 pr-1 animate-[typing_0.7s_steps(10),blink_1s_step-end_infinite]">
                I got you!
              </h1>
            </div>
          )}
          {response === "YES!" && (
            <div className="w-fit">
              <h1 className="text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-green-500 pr-1 animate-[typing_1.2s_steps(20),blink_1s_step-end_infinite]">
                {"Someone's excited :)"}
              </h1>
            </div>
          )}
          <Button className="mt-8" variant="hacker" size="hacker" onClick={() => window.open("whatsapp://send?phone=6139860904")}>
            Text me!
          </Button>
        </>
      )}
    </div>
  );
}

