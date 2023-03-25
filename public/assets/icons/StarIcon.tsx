import React from 'react';
type props = {
  onClick?: (_event: any) => void;
};
export const StarIcon = ({ onClick }: props) => {
  return (
    <svg
      width="35"
      height="33"
      viewBox="0 0 35 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1167_931)">
        <path
          d="M16.5489 0.927049C16.8483 0.00573874 18.1517 0.0057404 18.4511 0.927051L20.7555 8.01925C20.8893 8.43128 21.2733 8.71024 21.7065 8.71024H29.1637C30.1324 8.71024 30.5352 9.94985 29.7515 10.5193L23.7185 14.9025C23.368 15.1571 23.2213 15.6085 23.3552 16.0205L25.6596 23.1127C25.959 24.034 24.9045 24.8001 24.1208 24.2307L18.0878 19.8475C17.7373 19.5929 17.2627 19.5929 16.9122 19.8475L10.8792 24.2307C10.0955 24.8001 9.04103 24.034 9.34039 23.1127L11.6448 16.0205C11.7787 15.6085 11.632 15.1571 11.2815 14.9025L5.24852 10.5193C4.46481 9.94985 4.86758 8.71024 5.83631 8.71024H13.2935C13.7267 8.71024 14.1107 8.43128 14.2445 8.01925L16.5489 0.927049Z"
          fill="#FFB800"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1167_931"
          x="0.835938"
          y="0.236084"
          width="33.3281"
          height="32.1902"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1167_931"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1167_931"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StarIcon;
