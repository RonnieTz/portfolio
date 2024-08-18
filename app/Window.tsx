'use client';

import { useState, useRef } from 'react';
import Iframe from 'react-iframe';

const Window = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef({ x: 0, y: 0 });
  return (
    <div className="window">
      <div
        draggable
        onDrag={(e) => {
          setPosition({
            x: e.clientX - ref.current.x,
            y: e.clientY - ref.current.y,
          });
        }}
        onDragStart={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          e.dataTransfer.setDragImage(new Image(), 0, 0);
          ref.current = { x: x - position.x, y: y - position.y };
        }}
        onDragEnd={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          setPosition({ x: x - ref.current.x, y: y - ref.current.y });
          ref.current = { x: 0, y: 0 };
        }}
        onResize={(e) => {
          console.log(e);
        }}
        className="item"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      >
        <Iframe
          url="https://postcode-book.vercel.app/login"
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Window;
