import React from 'react'
import { FunctionComponent1 } from './function-component'
import { FunctionComponent2 } from './function-component'
import { FunctionComponent3 } from './function-component'
import { FunctionComponent4 } from './function-component'
import { FunctionComponent5 } from './function-component'
import BasePage from '../../components/base-page/base-page'

export const ReactComponent = () => {
  const fn1 = FunctionComponent1()
  // console.log(fn1)
  return (
    <>
     <BasePage fluid={true} title={'react-component'}>
     {fn1}
      {FunctionComponent1()}
      <FunctionComponent1 />

      {FunctionComponent2({ title: 'Hello Function Component', message: 'props introduction' })}
      {FunctionComponent2({ message: 'props introduction', title: 'fucntion component2' })}
      <FunctionComponent2 title={'FC2 JSX'} message='Use Function Component with JSX' />

      <FunctionComponent3 title={'FC3'} message={'Destructured props'} />

      <FunctionComponent4 title={'FC4'} message={'use with content'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea incidunt enim est accusamus
        amet repudiandae quae facilis tempore, recusandae velit blanditiis voluptas vitae
        consequuntur soluta labore! Ducimus magni hic nulla?
      </FunctionComponent4>

      <FunctionComponent4 title={'FC4'} message={'use with content'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea incidunt enim est accusamus
          amet repudiandae quae facilis tempore, recusandae velit blanditiis voluptas vitae
          consequuntur soluta labore! Ducimus magni hic nulla?
        </p>
      </FunctionComponent4>
      <FunctionComponent4 title={'FC4'} message={'use with content'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea incidunt enim est accusamus
          amet repudiandae quae facilis tempore, recusandae velit blanditiis voluptas vitae
          consequuntur soluta labore! Ducimus magni hic nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea incidunt enim est accusamus
          amet repudiandae quae facilis tempore, recusandae velit blanditiis voluptas vitae
          consequuntur soluta labore! Ducimus magni hic nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea incidunt enim est accusamus
          amet repudiandae quae facilis tempore, recusandae velit blanditiis voluptas vitae
          consequuntur soluta labore! Ducimus magni hic nulla?
        </p>
      </FunctionComponent4>

      <FunctionComponent5 title={'Complete Function Component'} message={'Using Content and props'}>
        <h4>Child 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae est
          exercitationem reiciendis voluptatibus excepturi minima quibusdam, quo reprehenderit
          inventore? Et ab non adipisci earum nemo aspernatur, at velit sit.
        </p>
      </FunctionComponent5>
     </BasePage>
    </>
  )
}
