import { css } from '@emotion/react'
import { typo } from '../typograph/typograph'

export const tableStyle = css`
  width: 100%;
  display: table;
  border-collapse: collapse;
`

export const theadStyle = css`
  display: table-header-group;
`

export const headerRowStyle = css`
  display: table-row;
  border-top: 1px solid var(--brand_black_300);
  border-bottom: 1px solid var(--brand_black_300);
`

export const headerCellStyle = (align: string, width: string) => css`
  ${typo({ type: 'subtitle5', weight: 'regular', color: 'brand_black_900' })}
  display: table-cell;
  padding: 10px 20px;
  min-width: ${width};
  text-align: ${align};
  vertical-align: middle;
`
