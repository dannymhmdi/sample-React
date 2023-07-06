import React from 'react'

const Row = ({ children }) => {
  return <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row' }}>{children}</div>
}

export default Row
