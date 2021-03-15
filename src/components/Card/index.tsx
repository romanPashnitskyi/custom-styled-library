import React from 'react'
import cx from 'classnames'
import { cardStyle } from '../../services/cardStyles'

import sty from './Card.module.scss'

interface CardElementPropTypes {
  padding?: number[]
  styles?: React.CSSProperties
  className?: string
  children: React.ReactNode | string
}

export const CardHeader: React.FC<CardElementPropTypes> = ({
  children,
  padding,
  styles,
  className
}) => {
  return (
    <div
      style={cardStyle(padding, styles)}
      className={cx(sty.header, className)}
    >
      {children}
    </div>
  )
}

export const CardBody: React.FC<CardElementPropTypes> = ({
  children,
  padding,
  styles,
  className
}) => {
  return (
    <div style={cardStyle(padding, styles)} className={cx(sty.body, className)}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<CardElementPropTypes> = ({
  children,
  padding,
  styles,
  className
}) => {
  return (
    <div
      style={cardStyle(padding, styles)}
      className={cx(sty.footer, className)}
    >
      {children}
    </div>
  )
}

interface CompoundPropTypes {
  Header: React.FC<CardElementPropTypes>
  Body: React.FC<CardElementPropTypes>
  Footer: React.FC<CardElementPropTypes>
}

interface CardPropTypes {
  padding?: number[]
  styles?: React.CSSProperties
  className?: string
}

const Card: React.FC<CardPropTypes> & CompoundPropTypes = ({
  children,
  padding,
  styles,
  className
}) => {
  return (
    <div style={cardStyle(padding, styles)} className={cx(sty.card, className)}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
