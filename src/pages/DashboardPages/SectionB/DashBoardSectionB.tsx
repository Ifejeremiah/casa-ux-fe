import Button from '../../../component/Button/Button'
import Dashboardheader from '../../../component/Dashboardheader/Dashboardheader'
import Checkbox from '../../../component/checkbox/checkbox'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

import './SectionB.css'
const SectionB = () => {
  const [open, setOpen] = useState(false)
  const handleDelete = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="col-lg-10 new-col-10">
      <div className="dashboard-info-con">
        <Dashboardheader hasSearchBar={true} />
        <div className="dashboard_body">
          <div className="my-3">
            <h2 className="dashboard_title ">Dashboard</h2>
            <p className="dashboard_subtext">Dashboard - Task </p>
          </div>
          <div className="dashboard_table">
            <div className="table_body">
              <div className="table-responsive">
                <table className="table">
                  <thead className="table_header">
                    <tr>
                      <th scope="col">
                        <Checkbox
                          id="head"
                          htmlfor="head"
                          width="100%"
                          height="100%"
                          color="#F6F6F2"
                          isChecked={true}
                        />
                      </th>
                      <th scope="col">Tutor’s Name</th>
                      <th scope="col">Task</th>
                      <th scope="col">Time Status</th>
                      <th scope="col">Status</th>
                      <th scope="col">Point</th>
                      <th scope="col">Level</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody className="">
                    <tr>
                      <th scope="row">
                        {' '}
                        <Checkbox
                          id="i1"
                          htmlfor="i1"
                          width="100%"
                          height="100%"
                        />
                      </th>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user_table_img">
                            <img
                              src="/icons/3d1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5
                            className="user_table_name text_overflow"
                            title="Wilson Godson owen Lorem"
                          >
                            Wilson Godson owen Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Doloremque inventore
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div className="   mt-1"></div>
                        <h5 className="user_table_task text_overflow">
                          Join the Slack Workspace.
                        </h5>
                      </td>
                      <td>
                        <div>
                          <p className="deadline_text">Deadline</p>
                          <h5 className="deadline-date">2024/2/21. 20:00:00</h5>
                        </div>
                      </td>
                      <td>
                        <Button
                          text="Not Submitted"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Gained 10p"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Level 2"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="succ"
                            hasIcon={true}
                            to="/dashboard/SectionC"
                            hasLeftIcon={false}
                            isLink={true}
                            icon="/icons/eyet.svg"
                          />
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="err"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={false}
                            icon="/icons/trash.svg"
                            onClick={handleDelete}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {' '}
                        <Checkbox
                          id="i2"
                          htmlfor="i2"
                          width="100%"
                          height="100%"
                        />
                      </th>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user_table_img">
                            <img
                              src="/icons/3d3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5
                            className="user_table_name text_overflow"
                            title="Wilson Godson owen Lorem"
                          >
                            Wilson Godson owen Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Doloremque inventore
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div className="   mt-1"></div>
                        <h5 className="user_table_task text_overflow">
                          Join the Slack Workspace.
                        </h5>
                      </td>
                      <td>
                        <div>
                          <p className="deadline_text">Deadline</p>
                          <h5 className="deadline-date">2024/2/21. 20:00:00</h5>
                        </div>
                      </td>
                      <td>
                        <Button
                          text="Done"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="No point given yet"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Level 2"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="succ"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={true}
                            to="/dashboard/SectionC"
                            icon="/icons/eyet.svg"
                          />
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="err"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={false}
                            icon="/icons/trash.svg"
                            onClick={handleDelete}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {' '}
                        <Checkbox
                          id="i3"
                          htmlfor="i3"
                          width="100%"
                          height="100%"
                        />
                      </th>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user_table_img">
                            <img
                              src="/icons/3d4.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5
                            className="user_table_name text_overflow"
                            title="Wilson Godson owen Lorem"
                          >
                            Wilson Godson owen Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Doloremque inventore
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div className="   mt-1"></div>
                        <h5 className="user_table_task text_overflow">
                          Join the Slack Workspace.
                        </h5>
                      </td>
                      <td>
                        <div>
                          <p className="deadline_text">Deadline</p>
                          <h5 className="deadline-date">2024/2/21. 20:00:00</h5>
                        </div>
                      </td>
                      <td>
                        <Button
                          text="Done"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Gained 10p"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Level 2"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                          onClick={handleDelete}
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="succ"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={true}
                            to="/dashboard/SectionC"
                            icon="/icons/eyet.svg"
                          />
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="err"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={false}
                            icon="/icons/trash.svg"
                            onClick={handleDelete}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {' '}
                        <Checkbox
                          id="i4"
                          htmlfor="i4"
                          width="100%"
                          height="100%"
                        />
                      </th>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user_table_img">
                            <img
                              src="/icons/3d5.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5
                            className="user_table_name text_overflow"
                            title="Wilson Godson owen Lorem"
                          >
                            Wilson Godson owen Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Doloremque inventore
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div className="   mt-1"></div>
                        <h5 className="user_table_task text_overflow">
                          Join the Slack Workspace.
                        </h5>
                      </td>
                      <td>
                        <div>
                          <p className="deadline_text">Deadline</p>
                          <h5 className="deadline-date">2024/2/21. 20:00:00</h5>
                        </div>
                      </td>
                      <td>
                        <Button
                          text="Done"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Gained 10p"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <Button
                          text="Level 2"
                          btnSize="sm"
                          btnType="purp"
                          hasIcon={false}
                          hasLeftIcon={false}
                          isLink={false}
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="succ"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={true}
                            to="/dashboard/SectionC"
                            icon="/icons/eyet.svg"
                          />
                          <Button
                            text=""
                            btnSize="sm"
                            btnType="err"
                            hasIcon={true}
                            hasLeftIcon={false}
                            isLink={false}
                            icon="/icons/trash.svg"
                            onClick={handleDelete}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="delete_modal"
      >
        <div className=" modal_body">
          <h4 className="modal_title">Delete User?</h4>
          <p className="modal_subtitle">
            Are you sure you want to delete this user form CasaUx platform
          </p>
          <div className="delete_warning my-3">
            <div className="warning_header d-flex  gap-3">
              <div className="warning_con_img">
                <img src="/icons/warning.svg" alt="" className="img-fluid" />
              </div>
              <p>Warning</p>
            </div>
            <h5 className="warning_text my-3">
              Please rethink your decision because you will not be able to undo
              this action
            </h5>
          </div>
          <div className="delete_modal_footer d-flex justify-content-end align-items-center gap-3">
            <Button
              text="Cancel"
              btnSize="sm"
              btnType="darkbtn"
              hasIcon={false}
              hasLeftIcon={false}
              isLink={false}
              icon="/icons/eyet.svg"
              onClick={handleClose}
            />
            <Button
              text="Delete"
              btnSize="sm"
              btnType="err"
              hasIcon={false}
              hasLeftIcon={true}
              isLink={false}
              icon="/icons/trash.svg"
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SectionB
