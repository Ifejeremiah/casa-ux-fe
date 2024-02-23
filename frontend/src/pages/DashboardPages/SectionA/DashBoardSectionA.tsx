import Bootcamptag from '../../../component/Bootcamptag/Bootcamptag'
import Pie from '../../../component/Pie/Pie'
import './DashBoardSectionA.css'
import ReactPlayer from 'react-player/youtube'

import { useState } from 'react'
import Variants from '../../../component/cardLoader/cardLoader'
import Skeleton from '@mui/material/Skeleton'
import Dashboardheader from '../../../component/Dashboardheader/Dashboardheader'

const SectionA = () => {
  const [isLoading] = useState(false)

  return (
    <div className="col-lg-10 new-col-10">
      <div
        className="dashboard-info-con"
        style={{ background: 'rgba(245, 238, 246, 0.31)' }}
      >
        <Dashboardheader />
        <div className="dashboard-info-body mt-3">
          <div className="overflow-panel">
            <div className="section-1 row mb-5">
              <div className="col-lg-6">
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
              <div className="col-lg-6">
                <div className="border-cards">
                  {isLoading ? (
                    <Variants />
                  ) : (
                    <div
                      className=" row justify-content-center align-items-center"
                      style={{
                        background: 'rgba(236, 235, 236, 1)',
                        borderRadius: '16px',
                      }}
                    >
                      <div className="col-lg-6">
                        <div
                          className="border-cards-info "
                          style={{ background: 'unset' }}
                        >
                          <div className="tag my-1">
                            <Bootcamptag
                              backgroundColor="#5F0D6C"
                              color="#ffffff"
                              text="GENERAL TASK"
                            />
                          </div>
                          <h4 className="task-name mt-2">JOIN SLACK</h4>
                          <p className="deadline-date">Deadline 2 days</p>
                          <p className="task-review my-2 text_overflow">
                            You have a day left to join slack and complete for
                            task, In this stage you will get to know your
                            facilitators and instructors recourse in dash board
                            to get every material you will recourse in dash
                            board to get every material you will
                          </p>
                          <div className="btns d-flex gap-3 ">
                            <button className="mini-btn">View</button>
                            <button className="mini-btn gray">Done</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="pic_box  ">
                          <img src="/images/avatar.jpg" alt="picture" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="section_2">
              <div className="row">
                <div className="col-lg-6">
                  <div className=" row ">
                    <div className="col-lg-4">
                      <div className="status-cards">
                        <div className="status-cards-info">
                          <h3>Level</h3>
                          <div className="student_level  d-flex justify-content-center">
                            <Pie percentage={20} colour="#5F0D6C" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="status-cards">
                        <div className="status-cards-info">
                          <h3>TRACKS</h3>
                          <div className="track_boxes d-flex flex-column justify-content-center align-items-center gap-2">
                            <div className="track_box_1 my-2">UI UX</div>
                            <div className="track_box_2">GENERAL</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="status-cards">
                        <div className="status-cards-info">
                          <h3>Points</h3>
                          <div className="student_level d-flex justify-content-center ">
                            <Pie percentage={73} colour="#5F0D6C" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="facilitator_con">
                    <div className="facilitator_con_header d-flex align-items-center gap-2 ">
                      <h4>Facilitators List</h4>
                      <div className="facilitator_con_track">
                        Track: Product Design
                      </div>
                    </div>
                    <div className="facilitator_con_body py-2">
                      <div className="d-flex flex-wrap gap-2">
                        <div className="facilitator d-flex gap-2">
                          <div className="facilitator_img">
                            <img src="/images/tutor3.png" alt="" />
                          </div>
                          <h5 className="facilitator_name">Jerome Bell</h5>
                        </div>
                        <div className="facilitator d-flex gap-2">
                          <div className="facilitator_img">
                            <img src="/images/tutor4.png" alt="" />
                          </div>
                          <h5 className="facilitator_name">Christain David</h5>
                        </div>{' '}
                        <div className="facilitator d-flex gap-2">
                          <div className="facilitator_img">
                            <img src="/images/tutor3.png" alt="" />
                          </div>
                          <h5 className="facilitator_name">Jerome Bell</h5>
                        </div>{' '}
                        <div className="facilitator d-flex gap-2">
                          <div className="facilitator_img">
                            <img src="/images/tutor2.png" alt="" />
                          </div>
                          <h5 className="facilitator_name">Benjamin Kelly</h5>
                        </div>{' '}
                        <div className="facilitator d-flex gap-2">
                          <div className="facilitator_img">
                            <img src="/images/tutor1.png" alt="" />
                          </div>
                          <h5 className="facilitator_name">Favour Uzochukwu</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="border-cards ">
                        {isLoading ? (
                          <Variants />
                        ) : (
                          <>
                            <div className="elite_student">
                              <h4>Elite Student</h4>
                            </div>
                            <div className="elite_student_table">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Name</th>
                                      <th scope="col">ID</th>
                                      <th scope="col">Point</th>
                                      <th scope="col">Level</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h4 className="text_overflow">
                                          Ekenen Douoghs Nmoak
                                        </h4>
                                      </td>
                                      <td>12345</td>
                                      <td>20</td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4 className="text_overflow">
                                          Maduka Obaligin Kelvin
                                        </h4>
                                      </td>
                                      <td>90830</td>
                                      <td>29</td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4 className="text_overflow">
                                          Larry Kingsily Joanh
                                        </h4>
                                      </td>
                                      <td>02233</td>
                                      <td>10</td>
                                      <td>3</td>
                                    </tr>
                                    <tr>
                                      <td>Stev</td>
                                      <td>23456</td>
                                      <td>69</td>
                                      <td>3</td>
                                    </tr>{' '}
                                    <tr>
                                      <td>
                                        <h4 className="text_overflow">
                                          Tony Ekuilop Jack
                                        </h4>
                                      </td>

                                      <td>45605</td>
                                      <td>34 </td>
                                      <td>3</td>
                                    </tr>{' '}
                                    <tr>
                                      <td>
                                        <h4 className="text_overflow">
                                          Emmanuel Hanazs
                                        </h4>
                                      </td>
                                      <td>2368</td>
                                      <td>12</td>
                                      <td>3</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="border-cards ">
                        {isLoading ? (
                          <Variants />
                        ) : (
                          <div className="border-cards-info">
                            <div className="tag my-1">
                              <Bootcamptag
                                backgroundColor="#5F0D6C"
                                color="#ffffff"
                                text="Up Coming Class"
                              />
                            </div>
                            <h4 className="task-name mt-1 text_overflow">
                              Design Fundamentals/Basics
                            </h4>
                            <p className="deadline-date">In 3 days time</p>
                            <p className="task-review my-1 text_overflow">
                              Get ready for an awesome time with jankah to to
                              learn the fundamentals and theory of UI UX design.
                              Go to recourse in dash board to get every material
                              you will be needing.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="btns d-flex gap-2 my-1">
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
