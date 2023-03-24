import React from 'react';

type props = {
  onClick?: (_event: any) => void;
};

const SelectArrow = ({ onClick }: props) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.19704 9.9183C6.59686 10.4569 7.40314 10.4569 7.80295 9.9183L13.6095 2.09604C14.0993 1.4362 13.6283 0.5 12.8065 0.5H1.19348C0.371706 0.5 -0.0992844 1.43619 0.390523 2.09604L6.19704 9.9183Z"
        fill="#39007E"
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default SelectArrow;
