import { css } from '@emotion/react'
import { I_Typography } from '../lib/typography'
import { I_ColorModel } from '../lib/color'

export const typo = ({ type, weight, color }: I_Typography & I_ColorModel) =>
  css({
    fontSize: `var(--${type})`,
    lineHeight: `var(--lineHeight_${type})`,
    fontWeight: `var(--${weight})`,
    color: `var(--${color})`,
  })
