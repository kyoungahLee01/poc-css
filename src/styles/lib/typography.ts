import { COLOR, TEXT } from './designToken'
import { I_ColorModel } from './color'

const TEXT_MODEL = TEXT
//===============================================================
// DESIGN TOKEN
//===============================================================
type T_Token_Typo_Type = {
  size: string
  lineHeight: string
}

type T_Token_Typo_Weight = {
  bold: number
  medium: number
  regular: number
  semibold: number
}

interface I_Token_Typo {
  Type: {
    [key: string]: T_Token_Typo_Type
  }
  Weight: T_Token_Typo_Weight
}

const TOKEN_TYPO: I_Token_Typo = TEXT_MODEL

//===============================================================
// MODEL Type and Interface
//===============================================================
export type T_Typo_Type = keyof typeof TEXT_MODEL.Type
export type T_Typo_Weight = keyof typeof TEXT_MODEL.Weight

export interface I_Typography {
  type: T_Typo_Type
  weight: T_Typo_Weight
}

//===============================================================
// TYPOGRAPHY_MODEL
//===============================================================
export const TYPOGRAPHY_MODEL = ({ type, weight }: I_Typography) => `
  font-size: var(--${type});
  line-height: var(--lineHeight_${type});
  font-weight: var(--${weight});
`

export const FONT_STYLE = ({ type, weight, color }: I_Typography & I_ColorModel) => `
  ${TYPOGRAPHY_MODEL({ type, weight })}
  color:var(--${color});
`



export const fontVariables = `
--fontScale: 1;
--caption: calc((${TOKEN_TYPO.Type.caption.size}) * var(--fontScale));
--overline: calc((${TOKEN_TYPO.Type.overline.size}) * var(--fontScale));
--subtitle6: calc((${TOKEN_TYPO.Type.subtitle6.size}) * var(--fontScale));
--subtitle5: calc((${TOKEN_TYPO.Type.subtitle5.size}) * var(--fontScale));
--subtitle4: calc((${TOKEN_TYPO.Type.subtitle4.size}) * var(--fontScale));
--subtitle3: calc((${TOKEN_TYPO.Type.subtitle3.size}) * var(--fontScale));
--subtitle2: calc((${TOKEN_TYPO.Type.subtitle2.size}) * var(--fontScale));
--subtitle1: calc((${TOKEN_TYPO.Type.subtitle1.size}) * var(--fontScale));
--header6: calc((${TOKEN_TYPO.Type.header6.size}) * var(--fontScale));
--header5: calc((${TOKEN_TYPO.Type.header5.size}) * var(--fontScale));
--header4: calc((${TOKEN_TYPO.Type.header4.size}) * var(--fontScale));
--header3: calc((${TOKEN_TYPO.Type.header3.size}) * var(--fontScale));
--header2: calc((${TOKEN_TYPO.Type.header2.size}) * var(--fontScale)); 
--header1: calc((${TOKEN_TYPO.Type.header1.size}) * var(--fontScale)); 
--bold: ${TOKEN_TYPO.Weight.bold}; 
--semibold: ${TOKEN_TYPO.Weight.semibold};
--medium: ${TOKEN_TYPO.Weight.medium}; 
--regular: ${TOKEN_TYPO.Weight.regular}; 
--lineHeight_caption: calc((${TOKEN_TYPO.Type.caption.lineHeight}) * var(--fontScale));
--lineHeight_overline: calc((${TOKEN_TYPO.Type.overline.lineHeight}) * var(--fontScale));
--lineHeight_subtitle6: calc((${TOKEN_TYPO.Type.subtitle6.lineHeight}) * var(--fontScale));
--lineHeight_subtitle5: calc((${TOKEN_TYPO.Type.subtitle5.lineHeight}) * var(--fontScale));
--lineHeight_subtitle4: calc((${TOKEN_TYPO.Type.subtitle4.lineHeight}) * var(--fontScale));  
--lineHeight_subtitle3: calc((${TOKEN_TYPO.Type.subtitle3.lineHeight}) * var(--fontScale));    
--lineHeight_subtitle2: calc((${TOKEN_TYPO.Type.subtitle2.lineHeight}) * var(--fontScale));     
--lineHeight_subtitle1: calc((${TOKEN_TYPO.Type.subtitle1.lineHeight}) * var(--fontScale));     
--lineHeight_header6: calc((${TOKEN_TYPO.Type.header6.lineHeight}) * var(--fontScale));     
--lineHeight_header5: calc((${TOKEN_TYPO.Type.header5.lineHeight}) * var(--fontScale));     
--lineHeight_header4: calc((${TOKEN_TYPO.Type.header4.lineHeight}) * var(--fontScale));     
--lineHeight_header3: calc((${TOKEN_TYPO.Type.header3.lineHeight}) * var(--fontScale));     
--lineHeight_header2: calc((${TOKEN_TYPO.Type.header2.lineHeight}) * var(--fontScale));     
--lineHeight_header1: calc((${TOKEN_TYPO.Type.header1.lineHeight}) * var(--fontScale));     
`