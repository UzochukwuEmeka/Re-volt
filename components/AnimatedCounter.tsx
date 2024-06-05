"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="w-100">
       <CountUp end={amount} decimal="2" prefix="$" duration={4} />
    </p>
  );
};

export default AnimatedCounter;
