import Button from '../../component/Button/Button'
import './Welcome.css'
const Welcome = () => {
  return (
    <section className="welcome-section pad-con">
      <div className="welcome-section-con h-100 ">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-10">
            <div className="glass-con">
              <h1>Welcome to Casa Ux Boot-camp</h1>
            </div>
            <div className=" d-flex justify-content-center mt-3">
              <Button
                text="Go to CasaBoard"
                btnSize="xl"
                hasIcon={false}
                hasLeftIcon={false}
                isLink={true}
                to="/dashboard/SectionA"
                btnType="prim"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
