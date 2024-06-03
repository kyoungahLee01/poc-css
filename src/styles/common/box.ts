import { css } from '@emotion/react'
import { CSSProperties } from 'react'

type CSSProps = { [key in keyof CSSProperties]?: CSSProperties[key] }

export const box = (props: CSSProps) => css`
  display: flex;
  ${props}
`
