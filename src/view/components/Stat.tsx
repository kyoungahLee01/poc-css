import { box } from '../../styles/common/box'
import { typo } from '../../styles/typograph/typograph'

export default function Stat() {
  return (
    <section css={box({ width: '100%', gap: '16px', flexDirection: 'column', alignItems: 'flex-start' })}>
      <strong css={typo({ type: 'subtitle2', weight: 'semibold', color: 'brand_black_1200' })}>배너 캠페인 현황</strong>
      <ul css={box({ width: '100%', gap: '20px' })}>
        <StatBox title="총 노출수" value="000,000" />
        <StatBox title="총 클릭수" value="000,000" />
        <StatBox title="클릭률" value="##,##%" />
      </ul>
    </section>
  )
}

function StatBox({ title, value }: { title: string; value: string }) {
  return (
    <li css={box({ width: '100%', padding: '24px', gap: '18px', background: 'var(--brand_gray_100)', borderRadius: '16px' })}>
      <div css={box({ width: '60px', height: '60px', background: '#ffffff', borderRadius: '12px' })} />
      <div css={box({ flexDirection: 'column', alignItems: 'flex-start' })}>
        <span css={typo({ type: 'subtitle5', weight: 'regular', color: 'brand_black_1000' })}>{title}</span>
        <span css={typo({ type: 'subtitle2', weight: 'bold', color: 'brand_black_1200' })}>{value}</span>
      </div>
    </li>
  )
}
