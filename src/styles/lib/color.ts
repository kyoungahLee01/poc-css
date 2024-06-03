import { COLOR } from './designToken'

import { THEME_TOKEN_COLOR } from './theme'

const theme = 'light'

export type T_Color_Key = keyof typeof COLOR
export const COLOR_MODEL = (color: T_Color_Key) => THEME_TOKEN_COLOR[theme][color]

export interface I_ColorModel {
  color: T_Color_Key
}

export const HEX_TO_RGBA = (color: T_Color_Key, alpha: number) => {
  const RGB = COLOR_MODEL(color)
  const r = parseInt(RGB.slice(1, 3), 16)
  const g = parseInt(RGB.slice(3, 5), 16)
  const b = parseInt(RGB.slice(5, 7), 16)
  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha / 100})` : `rgb(${r}, ${g}, ${b})`
}

export const colorVariables = `
  --brand_yellow_100:#FCFFDB;
  --brand_yellow_200:#FBFFC2;
  --brand_yellow_300:#F9FFA8;
  --brand_yellow_400:#F7FF91;
  --brand_yellow_500:#FAFF6B;
  --brand_yellow_600:#F7FF05;
  --brand_yellow_700:#FAFA00;
  --brand_yellow_800:#FFF23D;
  --brand_yellow_900:#FFE924;
  --brand_yellow_1000:#FFDE0A;
  --brand_yellow_1100:#FAD400;
  --brand_yellow_1200:#F5CC00;
  --brand_green_100:#EAFBF7;
  --brand_green_200:#D9F7F1;
  --brand_green_300:#C0F2E8;
  --brand_green_400:#A6EDDF;
  --brand_green_500:#91E8D7;
  --brand_green_600:#7CE4CF;
  --brand_green_700:#67E0C7;
  --brand_green_800:#4DDBBE;
  --brand_green_900:#25D4B1;
  --brand_green_1000:#06C29C;
  --brand_green_1100:#05B390;
  --brand_green_1200:#079C7E;
  --brand_gray_100:#F3F7F6;
  --brand_gray_200:#E4ECEC;
  --brand_gray_300:#D6E3E2;
  --brand_gray_400:#C5D8D6;
  --brand_gray_500:#B6CDCC;
  --brand_gray_600:#A7C3C1;
  --brand_gray_700:#98B9B6;
  --brand_gray_800:#89AEAB;
  --brand_gray_900:#7AA4A1;
  --brand_gray_1000:#6B9A96;
  --brand_gray_1100:#5F8B88;
  --brand_gray_1200:#557C79;
  --brand_black_100:#F9F9F9;
  --brand_black_200:#F2F2F2;
  --brand_black_300:#E8E8E8;
  --brand_black_400:#DBDBDB;
  --brand_black_500:#D1D1D1;
  --brand_black_600:#B8B8B8;
  --brand_black_700:#9E9E9E;
  --brand_black_800:#858585;
  --brand_black_900:#6B6B6B;
  --brand_black_1000:#525252;
  --brand_black_1100:#383838;
  --brand_black_1200:#191919;
  --yellow_100:#FFFBE5;
  --yellow_200:#FFF7CC;
  --yellow_300:#FFF4B2;
  --yellow_400:#FFF099;
  --yellow_500:#FFEC80;
  --yellow_600:#FFE866;
  --yellow_700:#FFE44D;
  --yellow_800:#FFE033;
  --yellow_900:#FFDD1A;
  --yellow_1000:#FFD900;
  --yellow_1100:#FFCC00;
  --yellow_1200:#FFBF00;
  --orange_100:#FFF4E5;
  --orange_200:#FFE9CC;
  --orange_300:#FFDEB3;
  --orange_400:#FFD399;
  --orange_500:#FFC880;
  --orange_600:#FFBD66;
  --orange_700:#FFB24C;
  --orange_800:#FFA733;
  --orange_900:#FF9C1A;
  --orange_1000:#FF9000;
  --orange_1100:#FF8400;
  --orange_1200:#FF7700;
  --purplelight_100:#F7F0FF;
  --purplelight_200:#EBDBFF;
  --purplelight_300:#DBBDFF;
  --purplelight_400:#CDA3FF;
  --purplelight_500:#BE8AFF;
  --purplelight_600:#B070FF;
  --purplelight_700:#A459FF;
  --purplelight_800:#943DFF;
  --purplelight_900:#8624FF;
  --purplelight_1000:#780AFF;
  --purplelight_1100:#6C00F0;
  --purplelight_1200:#6000D6;
  --purpledeep_100:#F3F0FF;
  --purpledeep_200:#E7E0FF;
  --purpledeep_300:#D2C7FF;
  --purpledeep_400:#BEADFF;
  --purpledeep_500:#A994FF;
  --purpledeep_600:#957AFF;
  --purpledeep_700:#8161FF;
  --purpledeep_800:#6D48FF;
  --purpledeep_900:#582EFF;
  --purpledeep_1000:#4314FF;
  --purpledeep_1100:#3200FA;
  --purpledeep_1200:#2D00E0;
  --green_100:#ECF8F3;
  --green_200:#D8F3E8;
  --green_300:#C5ECDD;
  --green_400:#B2E6D1;
  --green_500:#8CDEBD;
  --green_600:#73DDB3;
  --green_700:#51DBA4;
  --green_800:#31D392;
  --green_900:#1CCE87;
  --green_1000:#0FC27B;
  --green_1100:#04B56E;
  --green_1200:#03AA67;
  --skyblue_100:#E6F6FF;
  --skyblue_200:#D1EEFF;
  --skyblue_300:#B3E3FF;
  --skyblue_400:#99DAFF;
  --skyblue_500:#80D0FF;
  --skyblue_600:#66C7FF;
  --skyblue_700:#4CBEFF;
  --skyblue_800:#33B4FF;
  --skyblue_900:#1AABFF;
  --skyblue_1000:#00A2FF;
  --skyblue_1100:#0095FF;
  --skyblue_1200:#0088FF;
  --blue_100:#E5F0FF;
  --blue_200:#D1E3FF;
  --blue_300:#B3D1FF;
  --blue_400:#99C2FF;
  --blue_500:#80B2FF;
  --blue_600:#66A3FF;
  --blue_700:#4C94FF;
  --blue_800:#3385FF;
  --blue_900:#1C77FF;
  --blue_1000:#0066FF;
  --blue_1100:#005CE5;
  --blue_1200:#0052CC;
  --red_100:#FFF0F0;
  --red_200:#FFDDDB;
  --red_300:#FFC0BD;
  --red_400:#FFA7A3;
  --red_500:#FF8F8A;
  --red_600:#FF7770;
  --red_700:#FF5E57;
  --red_800:#FF443B;
  --red_900:#FF2E24;
  --red_1000:#FF150A;
  --red_1100:#F00B00;
  --red_1200:#D60A00;
  --grayishgreen_100:#F7F8F7;
  --grayishgreen_200:#F4F6F5;
  --grayishgreen_300:#F1F3F3;
  --grayishgreen_400:#EFF1F1;
  --grayishgreen_500:#ECEEEE;
  --grayishgreen_600:#E9ECEC;
  --grayishgreen_700:#E6EAE9;
  --grayishgreen_800:#E1E5E5;
  --grayishgreen_900:#DCE0E0;
  --grayishgreen_1000:#D9DEDE;
  --grayishgreen_1100:#D3D9D9;
  --grayishgreen_1200:#CED4D4;
  --grayishblue_100:#F6FAFF;
  --grayishblue_200:#EDF2FA;
  --grayishblue_300:#DFE6F1;
  --grayishblue_400:#CFD9E8;
  --grayishblue_500:#B9C4D6;
  --grayishblue_600:#9BA7BA;
  --grayishblue_700:#7F8A9B;
  --grayishblue_800:#677283;
  --grayishblue_900:#545F71;
  --grayishblue_1000:#3E4B5E;
  --grayishblue_1100:#2E3B4E;
  --grayishblue_1200:#232F41;
  --white:#ffffff;
  --black:#000000;
  --positive:#06C29C;
  --negative:#E80E04;
`
