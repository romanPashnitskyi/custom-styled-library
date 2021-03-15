import * as React from 'react'
import cx from 'classnames'

import sty from './Button.module.scss'

interface PropTypes {
  href?: string
  as?: string
  passHref?: boolean
  target?: string
  disabled?: boolean
  ghost?: boolean
  fluid?: boolean
  gray?: boolean
  lightGrey?: boolean
  shape?: 'round' | undefined
  styles?: React.CSSProperties
  className?: string
  children: React.ReactNode | string
  type?: 'primary' | 'default' | 'contentLike' | undefined
  htmlType?: 'submit' | undefined
  icon?: React.ReactElement
  iconRight?: React.ReactElement
  iconMargin?: number
  small?: boolean
  medium?: boolean
  minWidth?: number
  withShadow?: boolean
  onClick?: (event: React.SyntheticEvent) => void
}

const Button = React.forwardRef<HTMLButtonElement, PropTypes>(
  (
    {
      href,
      as,
      passHref = false,
      target = '_self',
      disabled,
      small,
      medium,
      minWidth = 'unset',
      withShadow,
      ghost,
      fluid,
      gray = false,
      lightGrey = false,
      type,
      shape = undefined,
      htmlType,
      styles,
      className,
      icon,
      iconRight,
      iconMargin = 5,
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    const buttonClasses = React.useMemo(
      () =>
        cx(
          sty.button,
          {
            [sty.fluid]: fluid,
            [sty.disabled]: disabled,
            [sty.default]: type === 'default',
            [sty.contentLike]: type === 'contentLike',
            [sty.small]: small,
            [sty.medium]: medium,
            [sty.ghost]: ghost,
            [sty.round]: shape === 'round',
            [sty.gray]: gray,
            [sty.lightGrey]: lightGrey
          },
          className
        ),
      [fluid, type, small, ghost, gray, shape]
    )

    const buttonStyles = React.useMemo(
      () => ({
        ...styles,
        minWidth: `${minWidth}px` || styles?.minWidth
      }),
      [styles, minWidth]
    )

    const renderButton = (
      <button
        {...rest}
        ref={ref}
        type={htmlType}
        style={buttonStyles}
        disabled={disabled}
        className={cx(
          {
            [sty.withShadow]: withShadow
          },
          buttonClasses
        )}
        onClick={onClick}
      >
        {Boolean(icon) && (
          <span
            className={sty.iconWrapper}
            style={{ marginRight: `${iconMargin}px` }}
          >
            {icon}
          </span>
        )}
        {children}
        {Boolean(iconRight) && (
          <span
            className={sty.iconWrapper}
            style={{ marginLeft: `${iconMargin}px` }}
          >
            {iconRight}
          </span>
        )}
      </button>
    )

    if (href) {
      return (
        <a href={href} target={target}>
          {renderButton}
        </a>
      )
    }

    return renderButton
  }
)

Button.defaultProps = {
  disabled: false,
  fluid: false,
  className: '',
  type: 'primary'
}

export default Button
