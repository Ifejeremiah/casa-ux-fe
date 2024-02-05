import SectionD from './SectionD/SectionD'
import SectionA from './SectionA/SectionA'
import SectionB from './SectionB/SectionB'
import SectionC from './SectionC/SectionC'
import SectionE from './SectionE/SectionE'
const Homepage = () => {
  return (
    <section>
      <SectionA />

      <div className="pad-con">
        <SectionB />
      </div>
      <SectionC />
      <SectionD />
      <SectionE />
    </section>
  )
}

export default Homepage
