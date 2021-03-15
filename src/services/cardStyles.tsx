import React from 'react'

export const cardStyle = (
  padding: number[] | undefined,
  styles: React.CSSProperties | undefined
) => {
  const paddingStr = React.useMemo(
    () => padding?.reduce((res: any, cur: any) => `${res} ${cur}px`, ''),
    [padding]
  )

  const cardStyles = React.useMemo<React.CSSProperties>(() => {
    const styleList: any[] = []

    if (paddingStr) {
      styleList.push({
        paddingTop: 'inherit',
        paddingLeft: 'inherit',
        paddingRight: 'inherit',
        paddingBottom: 'inherit',
        padding: paddingStr
      })
    }

    return styleList.reduce((res, cur) => ({ ...res, ...cur }), { ...styles })
  }, [styles, padding])

  return cardStyles
}
