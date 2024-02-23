import Dashboardheader from '../../../component/Dashboardheader/Dashboardheader'
import './SectionD.css'
import YoutubeEmbed from '../../../component/YoutubeEmbed/YoutubeEmbed'

const DashboardSectionD = () => {
  const handleDownload = () => {
    // Assuming 'pdfUrl' is the URL of the PDF file you want to download
    const pdfUrl = 'https://example.com/path/to/your.pdf'

    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'your_pdf_filename.pdf' // Change the filename as needed

    // Append the anchor to the document body
    document.body.appendChild(link)

    // Trigger the click event on the anchor
    link.click()

    // Clean up
    document.body.removeChild(link)
  }
  const getRandomColor = () => {
    const colors = ['#5F0D6C', '#B4AEAE', 'rgba(95, 13, 108, 0.5)']
    let rnColor = ''

    rnColor += colors[Math.floor(Math.random() * 4)]

    console.log(rnColor)
    return rnColor
  }
  const bootcampCourses = [
    {
      name: 'Full Stack Web Development Bootcamp',
      link: 'https://example.com/full-stack-web-dev-bootcamp',
    },
    {
      name: 'Data Science Bootcamp',
      link: 'https://example.com/data-science-bootcamp',
    },
    {
      name: 'UX/UI Design Bootcamp',
      link: 'https://example.com/ux-ui-design-bootcamp',
    },
    {
      name: 'Cybersecurity Bootcamp',
      link: 'https://example.com/cybersecurity-bootcamp',
    },
    {
      name: 'Digital Marketing Bootcamp',
      link: 'https://example.com/digital-marketing-bootcamp',
    },
    {
      name: 'Product Management Bootcamp',
      link: 'https://example.com/product-management-bootcamp',
    },
    {
      name: 'Software Engineering Bootcamp',
      link: 'https://example.com/software-engineering-bootcamp',
    },
    {
      name: 'Blockchain Development Bootcamp',
      link: 'https://example.com/blockchain-development-bootcamp',
    },
  ]

  return (
    <div className="col-lg-10 new-col-10">
      <div className="dashboard-info-con">
        <Dashboardheader hasSearchBar={true} />
        <div className="dashboard_body">
          <div className="my-4">
            <h2 className="dashboard_title ">Resources</h2>
            <p className="dashboard_subtext">
              Resources -<span className="ms-4">UI UX- Files/Videos </span>{' '}
            </p>
          </div>
          <div className="large_box">
            <div className="large_box_body" style={{ height: '100%' }}>
              <div className="dashboard_resoures_cards row ">
                {bootcampCourses.map((course) => (
                  <div className="col-lg-3  col-sm-6 mb-4">
                    <div className="file_card_con  " onClick={handleDownload}>
                      <div
                        className="file_card "
                        style={{ background: getRandomColor() }}
                      >
                        <h4 className="text_overflow">{course.name}</h4>
                        <p className="mt-2">Click to download your file</p>
                      </div>
                      <div className="overlay_circle">
                        <div className="inner_circle">
                          <img src="/images/Folder-open.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="videos_resoures">
                <div className="row">
                  <div className=" col-lg-3 mb-4">
                    <div className="video_card">
                      <YoutubeEmbed embedId="zHAa-m16NGk" />
                    </div>
                  </div>
                  <div className=" col-lg-3 mb-4">
                    <YoutubeEmbed embedId="zHAa-m16NGk" />
                  </div>{' '}
                  <div className=" col-lg-3 mb-4">
                    <div className="video_card">
                      <YoutubeEmbed embedId="zHAa-m16NGk" />
                    </div>
                  </div>{' '}
                  <div className=" col-lg-3 mb-4">
                    <div className="video_card">
                      <YoutubeEmbed embedId="zHAa-m16NGk" />
                    </div>
                  </div>{' '}
                  <div className=" col-lg-3 mb-4">
                    <div className="video_card">
                      <YoutubeEmbed embedId="zHAa-m16NGk" />
                    </div>
                  </div>{' '}
                  <div className=" col-lg-3 mb-4">
                    <div className="video_card">
                      <YoutubeEmbed embedId="zHAa-m16NGk" />
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

export default DashboardSectionD
