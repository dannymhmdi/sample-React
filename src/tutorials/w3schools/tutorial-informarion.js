import React from 'react'

const TutorialInformarion = ({ backgroundColor= 'gray', children }) => {
  return (
    <div style={{padding: '75px 0', backgroundColor}}>
        {children}
    </div>
  )
}

export default TutorialInformarion