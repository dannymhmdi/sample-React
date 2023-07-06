import React from 'react'

const TutorialInfo = ({ title, description, buttons }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {buttons}
      </div>
    </div>
  )               
}

export default TutorialInfo
