import React from 'react'

const Container = ({fluid=false, children }) => {
  return <div style={{ width: fluid? '100%': '85%', marginLeft: 'auto', marginRight: 'auto', paddingRight: '15px', paddingLeft: '15px' }}>{children}</div>
}

export default Container
