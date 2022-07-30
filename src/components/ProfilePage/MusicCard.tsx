import React from 'react'

function MusicCard() {
  return (
    <div className="flex items-center justify-between gap-x-2">
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 20V76L76 48L32 20Z" fill="black" />
      </svg>
    </div>
    <div className="space-y-1">
      <h1 className="font-semibold text-md">Music title</h1>
      <p className="text-gray-500 font-semibold text-sm">
        Band name
      </p>
    </div>
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 36H52V24H64V16H52V4H44V16H32V24H44V36ZM28 72C23.6 72 20.04 75.6 20.04 80C20.04 84.4 23.6 88 28 88C32.4 88 36 84.4 36 80C36 75.6 32.4 72 28 72ZM68 72C63.6 72 60.04 75.6 60.04 80C60.04 84.4 63.6 88 68 88C72.4 88 76 84.4 76 80C76 75.6 72.4 72 68 72ZM28.68 59L28.8 58.52L32.4 52H62.2C65.2 52 67.84 50.36 69.2 47.88L84.64 19.84L77.68 16H77.64L73.24 24L62.2 44H34.12L33.6 42.92L24.64 24L20.84 16L17.08 8H4V16H12L26.4 46.36L21 56.16C20.36 57.28 20 58.6 20 60C20 64.4 23.6 68 28 68H76V60H29.68C29.16 60 28.68 59.56 28.68 59Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
  )
}

export default MusicCard