import Bootcamptag from '../../../component/Bootcamptag/Bootcamptag'
import DashboardSideBar from '../../../component/DashboradSideBar/DashboardSideBar'
import './DashBoardSectionA.css'
import ReactPlayer from 'react-player/youtube'
// import { PieChart } from '@mui/x-charts/PieChart'
import { PieChart } from '@mui/x-charts'
import GaugeComponent from 'react-gauge-component'
import { useState } from 'react'
import Variants from '../../../component/cardLoader/cardLoader'
import Skeleton from '@mui/material/Skeleton'

const SectionA = () => {
  const [isLoading] = useState(false)
  return (
    <div className="container-fluid my-4 ">
      <div className="row justify-content-around ">
        <div className="col-lg-2 new-col-2">
          <DashboardSideBar />
        </div>
        <div className="col-lg-10 new-col-10">
          <div className="dashboard-info-con">
            <div className="dashboard-info-header">
              <div className="d-flex row justify-content-between">
                <div className="welcome-text col-lg-3">
                  <h3>
                    Welcome Back <span>Cecila Jonah</span>
                  </h3>
                  <p>Track: Product Design</p>
                </div>
                <div className="search-bar-panel col-lg-6 ">
                  <div className="search-bar-con">
                    <input type="text" placeholder="Search" />
                    <img src="/images/Search.svg" alt="" />
                  </div>
                </div>
                <div className="profile-img-initial col-lg-3">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="notification-icon">
                      <img src="/images/notify.svg" alt="" />
                    </div>
                    <div className="user-initial-img">
                      <img
                        src="/images/avatar.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-info-body mt-3">
              <div className="overflow-panel">
                <div className="section-1 row mb-5">
                  <div className="col-lg-8">
                    <div className="video-con ">
                      {isLoading ? (
                        <Skeleton
                          variant="rectangular"
                          width={'100%'}
                          height={'100%'}
                          animation={'wave'}
                        />
                      ) : (
                        <ReactPlayer
                          url={'https://www.youtube.com/watch?v=1PnVor36_40'}
                          width={'100%'}
                          height={'100%'}
                          controls={true}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="border-cards ">
                      {isLoading ? (
                        <Variants />
                      ) : (
                        <div className="border-cards-info">
                          <div className="tag my-3">
                            <Bootcamptag
                              backgroundColor="#5F0D6C"
                              color="#ffffff"
                              text="GENERAL TASK"
                            />
                          </div>
                          <h4 className="task-name mt-4">JOIN SLACK</h4>
                          <p className="deadline-date">Deadline 2 days</p>
                          <p className="task-review my-2 text_overflow">
                            You have a day left to join slack and complete for
                            task, In this stage you will get to know your
                            facilitators and instructors recourse in dash board
                            to get every material you will recourse in dash
                            board to get every material you will
                          </p>
                          <div className="btns d-flex gap-3 my-3">
                            <button className="mini-btn">View</button>
                            <button className="mini-btn gray">Done</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="section-2 row my-5">
                  <div className="col-lg-3">
                    <div className="status-cards">
                      <div className="status-cards-info"></div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="status-cards">
                      <div className="status-cards-info"></div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="status-cards">
                      <div className="status-cards-info"></div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="border-cards ">
                      {isLoading ? (
                        <Variants />
                      ) : (
                        <div className="border-cards-info">
                          <div className="tag my-3">
                            <Bootcamptag
                              backgroundColor="#5F0D6C"
                              color="#ffffff"
                              text="Up Coming Class"
                            />
                          </div>
                          <h4 className="task-name mt-4 text_overflow">
                            Design Fundamentals/Basics
                          </h4>
                          <p className="deadline-date">In 3 days time</p>
                          <p className="task-review my-2 text_overflow">
                            Get ready for an awesome time with jankah to to
                            learn the fundamentals and theory of UI UX design.
                            Go to recourse in dash board to get every material
                            you will be needing.
                          </p>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="btns d-flex gap-2 my-2">
                              <button className="mini-btn">View</button>
                              <button className="mini-btn gray">Done</button>
                            </div>
                            <div className="tutor-initials d-flex">
                              <span className="tutor-name">Jankah Aisha</span>
                              <div className="mini-tutor-img">
                                <img
                                  src="/images/tutor4.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="section-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="status-cards">
                        <div className="status-cards-info">
                          <h4 className="text_header">Course</h4>
                          <div style={{ height: '100%' }}>
                            <PieChart
                              series={[
                                {
                                  data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 80, label: 'series C' },
                                  ],
                                  innerRadius: 30,
                                  outerRadius: 100,
                                  paddingAngle: 5,
                                  cornerRadius: 5,
                                  startAngle: -90,
                                  endAngle: 360,
                                  cx: 150,
                                  cy: 150,
                                },
                              ]}
                              width={400}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="status-cards">
                        <div className="status-cards-info">
                          <h4 className="text_header">Your Percentage</h4>
                          <div className="w-100 d-flex justify-content-center mt-4">
                            <div
                              style={{
                                width: 'fit-content',
                              }}
                            >
                              <GaugeComponent
                                style={{ width: '100%' }}
                                value={20}
                                type="radial"
                                labels={{
                                  tickLabels: {
                                    type: 'inner',
                                    ticks: [
                                      { value: 20 },
                                      { value: 40 },
                                      { value: 60 },
                                      { value: 80 },
                                      { value: 100 },
                                    ],
                                  },
                                  valueLabel: {
                                    style: {
                                      fill: '#5F0D6C',
                                      textShadow: 'unset',
                                      fontFamily: 'var(--font-family)',
                                    },
                                  },
                                }}
                                arc={{
                                  colorArray: ['#5F0D6C', '#EA4228'],
                                  subArcs: [
                                    { limit: 10 },
                                    { limit: 30 },
                                    {},
                                    {},
                                    {},
                                  ],
                                  padding: 0.09,
                                  width: 0.3,
                                }}
                                pointer={{
                                  elastic: true,
                                  animationDelay: 0,
                                  color: '#5F0D6C',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionA
