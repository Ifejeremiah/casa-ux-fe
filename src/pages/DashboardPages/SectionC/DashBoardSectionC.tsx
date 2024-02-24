import Button from '../../../component/Button/Button'
import Dashboardheader from '../../../component/Dashboardheader/Dashboardheader'
import './DashBoardSectionC.css'
const DashBoardSectionC = () => {
  return (
    <div className="col-lg-10 new-col-10">
      <div className="dashboard-info-con">
        <Dashboardheader />
        <div className="dashboard_body">
          <div className="my-4">
            <h2 className="dashboard_title ">Dashboard</h2>
            <p className="dashboard_subtext">
              Dashboard - Task{' '}
              <span className="ms-4">Submission closed 3 days ago</span>{' '}
            </p>
          </div>
          <div className="dashboard_colunm">
            <div className="row">
              <div className="col-lg-8">
                <div className="large_box ">
                  <div className="large_box_header">
                    <h3>Task Title: Design a Food Mobile App</h3>
                    <p>Track - Product Design</p>
                    <p>Created On 02-10-2023 00:00:00</p>
                  </div>
                  <div className="large_box_body">
                    <p>
                      In other to get your first point to elevate you to your
                      next stage, you will have submit this before the deadline.
                      This is not optional
                    </p>
                    <p>
                      Go you resources to get the recourses needed for this
                      task. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sint explicabo, voluptatum dicta soluta officia
                      asperiores minima distinctio quo quisquam exercitationem
                      temporibus quod animi possimus de lorem3000 lectus quos ex
                      beatae laboriosam molestiae autem dolor inventore culpa,
                      perferendis reiciendis vero. Modi unde nostrum quidem
                      ratione voluptates suscipit tempore placeat quo deserunt
                      qui eius repellendus minima dolore vero! Voluptatibus
                      minima maxime, commodi odio nam et earum! Recusandae ipsum
                      ducimus doloribus, sed deleniti ratione. Dignissimos
                      necessitatibus ipsam, voluptas aut eius suscipit?
                    </p>

                    <span className="purp-text">Submit done when done</span>
                  </div>
                  <div className="large_box_footer">
                    <div className="gray_panel d-flex justify-content-start align-items-center">
                      <p>Submit done when done</p>
                      <Button
                        btnSize="lg"
                        isLink={false}
                        btnType="prim"
                        text="Done"
                        hasIcon={false}
                        hasLeftIcon={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="small_box">
                  <h4 className="small_box_title">Task Status</h4>
                  <ul>
                    <li>
                      <h4>Feedback:</h4>
                      <p>Well-done</p>
                    </li>
                    <li>
                      <h4>Feedback By:</h4>
                      <p>Wilson Godson owen</p>
                    </li>
                    <li>
                      <h4>Time:</h4>
                      <p>2024-02-07</p>
                    </li>
                    <li>
                      <h4>Elevated by:</h4>
                      <p>10 Point/100</p>
                    </li>
                  </ul>
                </div>
                <div className="small_box_2">
                  <p>
                    Note that once you submitte your task and you have been
                    graded you can’t go back to it again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardSectionC
