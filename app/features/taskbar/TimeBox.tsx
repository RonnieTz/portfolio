'use client';

import timeBox from '@/public/timebox.jpg';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const TimeBox = () => {
  const [time, setTime] = useState('');
  const [showDate, setShowDate] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      setTime(
        `${String(hour).length === 1 ? 0 : ''}${hour}:${
          String(minute).length === 1 ? 0 : ''
        }${minute}:${String(seconds).length === 1 ? 0 : ''}${seconds}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onMouseEnter={(e) => {
        setShowDate(true);
      }}
      onMouseLeave={(e) => {
        setShowDate(false);
      }}
      className="timebox"
    >
      <Image
        fill={true}
        priority={true}
        src={timeBox}
        alt="time box background"
      />
      <p className="time">{time}</p>
      {showDate && <div className="date">{new Date().toDateString()}</div>}
    </div>
  );
};

export default TimeBox;
