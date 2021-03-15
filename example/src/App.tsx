import React from 'react'

import ArrowRight from './assets/icons/ArrowRight'
import { Button, Card } from 'custom-styled-library'
import 'custom-styled-library/dist/index.css'

const App = () => {
  const handleSubit = () => {
    console.log('hi!')
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1371px',
        margin: '0 auto',
        padding: '0 1.5rem',
        boxSizing: 'border-box'
      }}
    >
      <Card styles={{ marginTop: '30px' }} padding={[10, 20, 30, 40]}>
        <Card.Header padding={[50, 15]}>Title, some text ...</Card.Header>
        <Card.Body padding={[12, 15]}>
          Some body text ...
          <Button
            styles={{ marginTop: '30px' }}
            // icon={<ArrowRight />}
            iconMargin={20}
            iconRight={<ArrowRight />}
            // disabled
            // withShadow
            // shape='round'
            // small
            // medium
            // minWidth={200}
            // ghost
            onClick={handleSubit}
          >
            btn text
          </Button>
        </Card.Body>
        <Card.Footer padding={[12, 15]}>Footer text ...</Card.Footer>
      </Card>
    </div>
  )
}

export default App
