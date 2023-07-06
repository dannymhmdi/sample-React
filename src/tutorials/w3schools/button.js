import React from 'react'

const Button = ({ width = '200px', color = 'black', backgroundColor = '#f1f1f1', children }) => {
  return (
    <button
      style={{
        display: 'inline-block',
        width,
        padding: '8px 16px',
        borderRadius: '200px',
        marginBottom: '20px',
        border: 'none',
        cursor: 'pointer',
        color,
        backgroundColor
      }}
    >
      {children}
    </button>
  )
}

export default Button
