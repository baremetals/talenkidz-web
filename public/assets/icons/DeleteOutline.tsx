import React from 'react';
type props = {
  onClick?: (_event: any) => void;
};
export const DeleteOutline = ({ onClick }: props) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.44444H11M4.75 5.88889V9.55556M7.25 5.88889V9.55556M1.625 3.44444L2.25 10.7778C2.25 11.1019 2.3817 11.4128 2.61612 11.642C2.85054 11.8712 3.16848 12 3.5 12H8.5C8.83152 12 9.14946 11.8712 9.38388 11.642C9.6183 11.4128 9.75 11.1019 9.75 10.7778L10.375 3.44444M4.125 3.44444V1.61111C4.125 1.44903 4.19085 1.2936 4.30806 1.17899C4.42527 1.06438 4.58424 1 4.75 1H7.25C7.41576 1 7.57473 1.06438 7.69194 1.17899C7.80915 1.2936 7.875 1.44903 7.875 1.61111V3.44444"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteOutline;
