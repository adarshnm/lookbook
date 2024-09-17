"use client";
import React, { useState } from "react";
import { Look } from "@/types/looks";
import LookView from "./LookView";
import { useSwipeable } from "react-swipeable";

interface Props {
  looks: Look[];
}

function LookBook({ looks }: Props) {
  const [currentLookIndex, setCurrentLookIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      handleNextLook();
    },
    onSwipedDown: () => {
      handlePrevLook();
    },
    trackMouse: true,
  });

  const handleNextLook = () => {
    setCurrentLookIndex((prevIndex) => (prevIndex + 1) % looks.length);
  };

  const handlePrevLook = () => {
    setCurrentLookIndex(
      (prevIndex) => (prevIndex - 1 + looks.length) % looks.length
    );
  };

  return (
    <div className="relative overflow-hidden min-h-full flex-1">
      <div className=" flex items-center justify-center " {...handlers}>
        <LookView look={looks[currentLookIndex]} key={currentLookIndex} />
      </div>
    </div>
  );
}

export default LookBook;
