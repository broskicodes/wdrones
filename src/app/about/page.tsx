"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const stages = [
  {
    num: 1,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.75s_steps(8),blink_1s_step-end_infinite]">
          Confused?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-4">
            <p className="text-sm md:text-xl max-w-2xl text-left">
                This page aims to answer 5 questions:
            </p>
            <ul className="list-disc list-inside text-sm md:text-xl max-w-2xl">
                <li><span className="font-bold">What</span> am I hoping to build?</li>
                <li><span className="font-bold">Why</span> I wanna do that?</li>
                <li><span className="font-bold">When</span> I intend to ship?</li>
                <li><span className="font-bold">Who</span> I am?</li>
                <li><span className="font-bold">How</span> I intend to do any of this?</li>
            </ul>
        </div>
    ),
  },
  {
    num: 2,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.5s_steps(5),blink_1s_step-end_infinite]">
          What?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-1">
            <p className="text-sm md:text-xl max-w-2xl w-full">
                I wanna build an autonomous drone.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                It should be able to fly and navigate by itself without any input or control from a human.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`The drone will have at least one camera to allow it to "see" the world. I will integrate some vision capabilities so that it can "reason" about what it sees.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`The drone will also have GPS so that it can navigate from place to place.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                Ideally, a person will be able to (optionally) control the drone using natural language (to specify a task) or through controller inputs.
            </p>
        </div>
    ),
  },
  {
    num: 3,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.5s_steps(4),blink_1s_step-end_infinite]">
          Why?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-1">
            <p className="text-sm md:text-xl max-w-2xl w-full">
                The primary reason i want to build a drone is simple: I think it will be fun.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                The second reason is just as simple: I think it will be hard.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {"\"Great work\""}, as Paul Graham <Link href="https://paulgraham.com/greatwork.html" target="_blank" className="text-[#00E500] underline hover:underline-offset-4 hover:[text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">defines it</Link>, happens at the intersection of these 2 things; interest and hard things.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                I am not saying that I think that autonomous drones will be revolutionary, or even at all important in the grand scheme of things.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                I am simply following my interest.
            </p>
        </div>
    ),
  },
  {
    num: 4,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.5s_steps(5),blink_1s_step-end_infinite]">
          When?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-1">
            <p className="text-sm md:text-xl max-w-2xl w-full">
                The next natural question is when.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {"When will the drone be done? When will i have \"solved\" the \"problem\"?"}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`The answer is I don't know.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`I have a lot of things to learn and explore before I'll be satisfied.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                At the very least, I imagine that I will have some functioning prototype (able to fly and move) that is fully designed and built by me by <span className="bg-[#00E500] text-black px-2 py-0.5 rounded font-bold shadow-[0_0_10px_rgb(0_229_0_/_100%)] transition-shadow duration-200">January 31st, 2025</span>.
            </p>
        </div>
    ),
  },
  {
    num: 5,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.5s_steps(4),blink_1s_step-end_infinite]">
          Who?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-1">
            <p className="text-sm md:text-xl max-w-2xl w-full">
                My name is <span className="text-[#00E500] font-bold [text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">Braeden</span> {":)"}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {"I studied computer science at uni and I am yet to graduate (interpret that how you will)."}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                For the past 1-2 years I have been building SAAS companies in emerging tech (AI + crypto).
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                Apart from a couple classes in high school, I have no formal education or training in engineering and physics.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`But on some level, I've always been drawn to hardware.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`I'm a person who enjoys building things.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`And the thing I'm building now is an`} <span className="text-[#00E500] font-bold [text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">autonomous drone</span>.
            </p>
        </div>
    ),
  },
  {
    num: 6,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_0.5s_steps(4),blink_1s_step-end_infinite]">
          How?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-1">
            <p className="text-sm md:text-xl max-w-2xl w-full">
                {`As I've said, I have no formal training in engineering or physics.`}
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                So naturally, my first step is to learn.
            </p>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                I am currently studying many things, including:
            </p>
            <ul className="list-disc list-inside text-sm md:text-xl max-w-2xl pl-4">
                <li><Link href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" target="_blank" className="text-[#00E500] underline hover:underline-offset-4 hover:[text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">classical mechanics</Link> (physics of motion)</li>
                <li><Link href="https://aerospace.gdgoenka-university.com/wp-content/uploads/2023/10/introduction-to-flight-8th-edition-pdf-free.pdf" target="_blank" className="text-[#00E500] underline hover:underline-offset-4 hover:[text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">aerospace engineering</Link> (physics and design of flying vehicles)</li>
                <li><Link href="http://instrumentacion.qi.fcen.uba.ar/libro/Scherz.pdf" target="_blank" className="text-[#00E500] underline hover:underline-offset-4 hover:[text-shadow:_0_0_10px_rgb(0_229_0_/_70%),_0_0_20px_rgb(0_229_0_/_50%)]">electrical engineering</Link> (physics and design of electrical circuits)</li>
            </ul>
            <p className="text-sm md:text-xl max-w-2xl w-full">
                Obviously my interest goes beyond pure theory. So I am also exploring:
            </p>
            <ul className="list-disc list-inside text-sm md:text-xl max-w-2xl pl-4 w-full">
                <li>CAD for 3D modelling components</li>
                <li>Building and testing real circuits</li>
                <li>3D printing</li>
                <li>Physics simulations</li>
            </ul>
        </div>
    ),
  },
  {
    num: 7,
    header: (key: number) => (
      <div className="w-fit">
        <h1 key={key} className="text-2xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#00E500] pr-1 animate-[typing_1.25s_steps(26),blink_1s_step-end_infinite]">
          So, do you want a drone?
        </h1>
      </div>
    ),
    content: (
        <div className="w-fit flex flex-col items-center justify-left gap-1">
           <Link href="/" className={cn(buttonVariants({ variant: "hacker", size: "hacker" }), "text-lg md:text-xl px-6 md:px-8")}>Hell yes!</Link>
        </div>
    ),
  }
];

export default function About() {
  const [currentStage, setCurrentStage] = useState(0);

  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-[#00E500] [text-shadow:_0_0_5px_rgb(0_229_0_/_50%),_0_0_15px_rgb(0_229_0_/_30%)] font-mono p-4">
      <div className="container mx-auto">
        <Link href="/" className="absolute top-4 text-xl md:text-2xl font-bold tracking-widest">
          wDrones
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2 w-full max-w-[80vw] md:max-w-none">
          {stages[currentStage].header(currentStage)}
          {stages[currentStage].content}
        </div>
        
        <div className="flex gap-4">
          <Button 
            variant="hacker" 
            size="hacker" 
            onClick={prevStage} 
            disabled={currentStage === 0}
            className={`text-lg md:text-xl px-6 md:px-8 ${currentStage === 0 ? 'opacity-50' : ''}`}
          >
            {"< Back"}
          </Button>
          <Button 
            variant="hacker" 
            size="hacker" 
            onClick={nextStage} 
            disabled={currentStage === stages.length - 1}
            className={`text-lg md:text-xl px-6 md:px-8 ${currentStage === stages.length - 1 ? 'opacity-50' : ''}`}
          >
            {"Next >"}
          </Button>
        </div>
      </div>
    </div>
  );
} 