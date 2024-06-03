import { COLOR } from './designToken'

interface I_Color {
  [key: string]: string
}

interface I_Theme {
  light: I_Color
}

export const THEME_TOKEN_COLOR: I_Theme = {
  light: COLOR,
}
