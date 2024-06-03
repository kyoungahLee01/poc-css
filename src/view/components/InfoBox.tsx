import { typo } from '../../styles/typograph/typograph'
import { box } from '../../styles/common/box'

export default function InfoBox() {
  return (
    <div
      css={box({
        width: '100%',
        height: '60px',
        background: 'var(--grayishblue_100)',
        borderRadius: '12px',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <p css={typo({ type: 'subtitle5', weight: 'regular', color: 'brand_black_1200' })}>
        사이트에 방문한 고객에게 배너로 타겟팅하는 캠페인입니다. 모든 고객 여정마다 효과가 검증된 배너 캠페인을 무료로 사용해
        보세요!
      </p>
    </div>
  )
}
