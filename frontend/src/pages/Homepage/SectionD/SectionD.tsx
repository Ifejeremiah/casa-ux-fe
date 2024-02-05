import './SectionD.css'

const SectionD = () => {
  const features = [
    {
      tilte: 'Comprehensive Curriculum',
      features:
        ' Diverse and well-structured curriculum covering various aspects of UI/UX design.',
      benefit:
        'Gain comprehensive knowledge and hands-on experience in different areas crucial for a successful design career.',
    },
    {
      tilte: ' Expert Instructors and Mentors',
      features:
        ' Experienced and industry-leading instructors with a wealth of expertise.',
      benefit:
        'Receive guidance and insights from professionals, learning real-world applications and industry best practices.',
    },
    {
      tilte: ' Mentorship and Career Support',
      features: ' Mentorship programs and career guidance sessions.',
      benefit:
        'Receive personalized advice, feedback, and networking opportunities to kick-start or advance your design career.',
    },
    {
      tilte: 'Continued Learning Opportunities',
      features: ' Access to ongoing resources, webinars, and alumni support.',
      benefit:
        ' Stay updated with evolving trends, tools, and practices, fostering continuous growth and development.',
    },
    {
      tilte: 'Personalized Portfolio Development',
      features:
        ' Guidance and support in crafting a standout design portfolio.',
      benefit:
        ' Create a portfolio that showcases skills and projects effectively, enhancing job prospects and career opportunities.',
    },
    {
      tilte: 'Interactive Workshops and Sessions',
      features:
        'Engaging workshops, live sessions, and interactive learning activities.',
      benefit:
        'Foster collaboration, creativity, and networking opportunities with peers and industry professionals.',
    },
  ]

  return (
    <div className=" py-5" style={{ background: '#313131' }}>
      <div className="feature-con pad-con">
        <h2>Features & Benefits</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-4 my-3" key={index}>
              <div className="feature-con">
                <h5 className="feature-title my-4">{feature.tilte}</h5>
                <div className="feature-benfits-con">
                  <div className="feature">
                    <h4>Features</h4>
                    <p>{feature.features}</p>
                  </div>
                  <div className="benefits">
                    <h4>Benefits</h4>
                    <p>{feature.benefit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionD
