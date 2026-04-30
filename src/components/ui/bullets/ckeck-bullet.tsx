import React from 'react';

export type CheckBulletIconProps = {
  varient: "default" | "purple"
}

/**
 * use varient prop 'Default' if requirement is classic dark-gray tick bullet, otherwise
 * use varientprop 'Purple'
*/
export default function CheckBulletIcon({ varient }: CheckBulletIconProps) {
  if (varient == "default") return (
    <div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.89998" cy="9.89973" r="7.425" stroke="#061219" strokeWidth="1.03125" />
        <path d="M6.59995 9.90029L9.07495 12.3753L13.2 7.42529" stroke="#061219" strokeWidth="1.03125" />
      </svg>
    </div>
  );

  if (varient = "purple") return (
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "#b97bff",
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      <svg
        width={8}
        height={8}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7700FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  )
};