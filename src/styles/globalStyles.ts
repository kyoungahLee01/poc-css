import { Interpolation, Theme, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import { colorVariables } from './lib/color'
import { fontVariables } from './lib/typography'

export const globalStyles: Interpolation<Theme> = css`
  ${emotionReset}
  :root {
    ${colorVariables}
    ${fontVariables}
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
