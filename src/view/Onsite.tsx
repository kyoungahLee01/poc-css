import { contentLayout } from '../styles/layout/main'
import ControlTable from './components/ControlTable'
import InfoBox from './components/InfoBox'
import Stat from './components/Stat'

export default function Onsite() {
  return (
    <main css={contentLayout}>
      <InfoBox />
      <Stat />
      <ControlTable />
    </main>
  )
}
