import React from 'react'
import TutorialInformarion from './tutorial-informarion'
import Container from './container'
import W50 from './w-50'
import Row from './row'
import TutorialInfo from './tutorial-info'
import Button from './button'
import BasePage from '../../components/base-page/base-page'

const W3schoolsPage = () => {
  return (
    
    <BasePage fluid={false} title={'w3-sample'}>
      <TutorialInformarion backgroundColor='#D9EEE1'>
        <Container>
          <Row>
            <W50>
              <TutorialInfo
                title={'HTML'}
                description={'The language for building web pages'}
                buttons={[
                  <Button color='white' backgroundColor='#04AA6D'>
                    Learn HTML
                  </Button>,
                  <Button color='black' backgroundColor='#FFF4A3'>
                    Video Tutorial
                  </Button>,
                  <Button color='white' backgroundColor='black'>
                    HTML Reference
                  </Button>,
                  <Button color='black' backgroundColor='#ffb3bb'>
                    Get Certificate
                  </Button>,
                ]}
              />
            </W50>
            <W50>dsds</W50>
          </Row>
        </Container>
      </TutorialInformarion>

      <TutorialInformarion backgroundColor='#FFF4A3'>
        <Container>
          <Row>
            <W50>
              <TutorialInfo
                title={'CSS'}
                description={'The language for styling web pages'}
                buttons={[
                  <Button color='white' backgroundColor='#04AA6D'>
                    Learn CSS
                  </Button>,
                  <Button color='white' backgroundColor='black'>
                    CSS Reference
                  </Button>,
                  <Button color='black' backgroundColor='#ffb3bb'>
                    Get Certificate
                  </Button>,
                ]}
              />
            </W50>
            <W50>dsds</W50>
          </Row>
        </Container>
      </TutorialInformarion>
      

      <TutorialInformarion backgroundColor='#282A35'>
        <Container>
          <Row>
            <W50>
              <TutorialInfo
                title={'JavaScript'}
                description={'The language for programming web pages'}
                buttons={[
                  <Button color='white' backgroundColor='#04AA6D'>
                    Learn JavaScript
                  </Button>,
                  <Button color='white' backgroundColor='black'>
                    JavaScript Reference
                  </Button>,
                  <Button color='black' backgroundColor='#ffb3bb'>
                    Get Certificate
                  </Button>,
                ]}
              />
            </W50>
            <W50>dsds</W50>
          </Row>
        </Container>
      </TutorialInformarion>
    </BasePage>
  
  )
}

export default W3schoolsPage
