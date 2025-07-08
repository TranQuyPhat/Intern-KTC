import React, { useEffect, useState } from "react";

type Props = {
  endTime: Date;        
  label?: string;       
};

const CountdownTimer: React.FC<Props> = ({ endTime, label = "Kết thúc sau:" }) => {
  const calculateTimeLeft = () => {
    const difference = endTime.getTime() - new Date().getTime();
    const totalSeconds = Math.max(Math.floor(difference / 1000), 0);

    return {
      days: Math.floor(totalSeconds / (60 * 60 * 24)),
      hours: Math.floor((totalSeconds / 3600) % 24),
      minutes: Math.floor((totalSeconds / 60) % 60),
      seconds: totalSeconds % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span>{label}</span>
      <span>
        {formatNumber(timeLeft.days)}:{formatNumber(timeLeft.hours)}:
        {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
      </span>
    </div>
  );
};

export default CountdownTimer;
