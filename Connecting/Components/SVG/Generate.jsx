import React from "react";

const Generate = () => {
  return (
    <div className="relative flex items-center justify-center text-xl sm:hidden w-full">
      <div
        className="absolute w-full"
        style={{
          borderBottom: "2.5px solid transparent",
          bottom: "-17px",
        }}
      />
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={10} />
        <line x1="14.31" y1={8} x2="20.05" y2="17.94" />
        <line x1="9.69" y1={8} x2="21.17" y2={8} />
        <line x1="7.38" y1={12} x2="13.12" y2="2.06" />
        <line x1="9.69" y1={16} x2="3.95" y2="6.06" />
        <line x1="14.31" y1={16} x2="2.83" y2={16} />
        <line x1="16.62" y1={12} x2="10.88" y2="21.94" />
      </svg>
    </div>
  );
};

export default Generate;
