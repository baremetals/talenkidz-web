/* eslint-disable react/prop-types */
import React from 'react';

export const CheckMarkIcon = ({ color = 'currentColor' }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 2L9.41603 22.376C9.21811 22.6728 8.78189 22.6728 8.58397 22.376L2 12.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheckMarkIcon;
