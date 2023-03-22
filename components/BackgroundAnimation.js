import React from 'react'


export const BackgroundAnimation = ({ children, circlesCount = 10 }) => {
    const circles = new Array(circlesCount).fill(null).map((_, i) => {
      const animationDelay = i % 2 === 0 ? i * 2 : (i - 1) * 2;
      const animationDuration = i % 4 === 0 ? 18 : 12;
      const size = i % 4 === 0 ? 150 : i % 3 === 0 ? 110 : i % 2 === 0 ? 60 : 20;
  
      return (
        <li
          key={i}
          style={{
            left: `${Math.floor(Math.random() * 80) + 10}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        />
      );
    });
  
    return (
      <>
        <div className="context">
          <div className="allchildren">{children}</div>
        </div>
  
        <div className="area">
          <ul className="circles">{circles}</ul>
        </div>
      </>
    );
  };



