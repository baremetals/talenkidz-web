import React from 'react';

type props = {
  onClick?: (_event: any) => void;
  className?: string;
};

const DragIcon = ({ onClick, className }: props) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="30"
      height="23"
      viewBox="0 0 30 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="12"
        x2="19"
        y2="12"
        stroke="#39007E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="1.5"
        x2="28.5"
        y2="1.5"
        stroke="#39007E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="21.5"
        x2="8.5"
        y2="21.5"
        stroke="#39007E"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DragIcon;
