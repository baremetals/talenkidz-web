import React from 'react'

function CardStats() {
  return (
    <div className="rounded-xl overflow-hidden">
    <div className="flex justify-between bg-white items-center py-4 px-12">
      <div className="flex space-x-4 items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 88 72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 0H8C3.6 0 0 3.6 0 8V64C0 68.4 3.6 72 8 72H80C84.4 72 88 68.4 88 64V8C88 3.6 84.4 0 80 0ZM80 64H8V8H80V64ZM28 48C28 41.36 33.36 36 40 36C41.4 36 42.76 36.28 44 36.72V12H64V20H52V48.12C51.92 54.68 46.6 60 40 60C33.36 60 28 54.64 28 48Z"
            fill="black"
          />
        </svg>
        <p className="font-semibold text-2xl ">
          {" "}
          Karmens song &#183; 9,966{" "}
        </p>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative w-5 h-16">
          <img
            src="/leftArrow.svg"
            className="absolute w-5 h-16 hover:scale-150 transition duration-500 cursor-pointer"
          />
        </div>
        <div className="relative w-5 h-16">
          <img
            src="/rightArrow.svg"
            className="w-5 h-16 hover:scale-150 transition duration-500 cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div className="relative ">
      <img src="/circleDemo.png" className=" w-full inset-x-0" />
    </div>
  </div>
  )
}

export default CardStats