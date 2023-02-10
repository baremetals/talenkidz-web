import React from 'react';

type props = {
  onClick?: (_event: any) => void;
  className?: string;
};

const Heart = ({ onClick, className }: props) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0C6.705 0 0 6.75 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C5.78628 26.9995 7.43986 28.1044 9.25975 28.8582C11.0796 29.612 13.0302 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 13.0302 29.612 11.0796 28.8582 9.25975C28.1044 7.43986 26.9995 5.78628 25.6066 4.3934C24.2137 3.00052 22.5601 1.89563 20.7403 1.14181C18.9204 0.387987 16.9698 0 15 0ZM11.625 8.73C12.93 8.73 14.175 9.345 15 10.305C15.825 9.345 17.07 8.73 18.375 8.73C20.685 8.73 22.5 10.545 22.5 12.855C22.5 15.69 19.95 18 16.08 21.51L15 22.5L13.92 21.51C10.05 18 7.5 15.69 7.5 12.855C7.5 10.545 9.315 8.73 11.625 8.73Z"
        fill="#39007E"
      />
    </svg>
  );
};

export default Heart;
