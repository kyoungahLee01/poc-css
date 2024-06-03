import { box } from '../../styles/common/box'
import { headerCellStyle, headerRowStyle, tableStyle, theadStyle } from '../../styles/common/table'
import { typo } from '../../styles/typograph/typograph'

export default function ControlTable() {
  const header = [
    { label: '현황', width: '86px', align: 'left' },
    { label: '디바이스', width: '124px', align: 'left' },
    { label: '캠페인 유형과 이름', width: '100%', align: 'left' },
    { label: '노출수', width: '95px', align: 'right' },
    { label: '클릭수', width: '95px', align: 'right' },
    { label: '클릭률', width: '95px', align: 'right' },
    { label: '목표지표', width: '154px', align: 'left' },
    { label: '', width: '72px', align: 'left' },
  ]
  return (
    <section css={box({ width: '100%', flexDirection: 'column', gap: '16px' })}>
      <strong css={typo({ type: 'subtitle2', weight: 'semibold', color: 'brand_black_1200' })}>캠페인 목록 (999)</strong>
      <div css={box({ width: '100%', height: '100%' })}></div>
      <table css={tableStyle}>
        <thead css={theadStyle}>
          <tr css={headerRowStyle}>
            {header.map((data) => (
              <th css={headerCellStyle(data.align, data.width)}>{data.label}</th>
            ))}
          </tr>
        </thead>
      </table>
    </section>
  )
}
