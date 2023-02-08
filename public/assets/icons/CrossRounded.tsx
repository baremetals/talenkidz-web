import React from 'react';

type props = {
  onClick?: () => void;
};

export const CrossRounded = ({ onClick }: props) => {
  return (
    <svg
      onClick={onClick}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cross-rounded-icon"
    >
      <line
        x1="16.2616"
        y1="16.2634"
        x2="6.36207"
        y2="6.36393"
        stroke="#39007E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6.36328"
        y1="16.2635"
        x2="16.2628"
        y2="6.36403"
        stroke="#39007E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
