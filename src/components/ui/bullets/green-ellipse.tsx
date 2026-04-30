import React from 'react';

export default function GreenEllipseStatus() {
  return (
    <div 
      style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* Outer faint circle */}
      <div 
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#49FF9B33)',
          position: 'absolute'
        }}
      />
      {/* Inner solid circle */}
      <div 
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#49FF9C', // Solid bright spring green
          zIndex: 1
        }}
      />
    </div>
  );
};