import * as React from 'react'
import sty from './ExampleComponent.module.scss'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div className={sty.test}>Example Component: {text}</div>
}

export default ExampleComponent
