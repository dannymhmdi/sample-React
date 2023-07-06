import React from 'react'
import './css-in-react.css'
import BasePage from '../../components/base-page/base-page';

const CssInReact = () => {
  return (
  <BasePage fluid={true} title={'css-in-react'}>
    <div className='css-in-react-wrapper'>
      <h2 className='title text-primary'>CSS In React</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat delectus, fuga
        consequuntur earum temporibus sequi a illum accusamus veniam excepturi, ut incidunt quam
        neque atque vitae doloremque pariatur in? Officia.
      </p>
    </div>
  </BasePage>
  );
  
}

export default CssInReact