"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownDate = new Date("Nov 5, 2027 15:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(null);
        return;
      }

      const days = String(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return (
      <p className="text-center text-4xl font-semibold text-white">EXPIRED</p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="text-center min-w-[70px] sm:min-w-[80px]">
          <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-2xl sm:text-4xl font-bold rounded-xl shadow-md w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center transition-colors duration-300">
            {item.value}
          </div>
          <p className="text-white dark:text-gray-300 mt-2 font-medium text-xs sm:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
