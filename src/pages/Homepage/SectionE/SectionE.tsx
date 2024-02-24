import TwoCard from '../../../component/TwoCard/TwoCard'
import './SectionE.css'
const SectionE = () => {
  const instructors = [
    {
      name: 'Ada Mikeelle',
      img: 'tutor1.png',
      skills: 'UX designer and Researcher',
    },
    {
      name: 'Olubunmi Yetunde',
      img: 'tutor2.png',
      skills: 'Backend/Frontend Developer/Life coach',
    },
    {
      name: 'Ada Mikeelle',
      img: 'tutor3.png',
      skills: 'Full Stack Developer Project Manager',
    },
    {
      name: 'Ada Mikeelle',
      img: 'tutor4.png',
      skills: 'Cloud Solutions Architect',
    },
    {
      name: 'Afolabi Omotola ',
      img: 'tutor5.png',
      skills: 'Product Manager',
    },
  ]

  return (
    <div className="py-5" style={{ background: '#F8F8F8' }}>
      <div className="   pad-con ">
        <h2 className="instructor-header">Meet Our Instructors</h2>
        <div className="row">
          {instructors.map((instructor, index) => (
            <div className="col-lg-4 my-5" key={index}>
              <TwoCard
                btnText="Follow"
                grayText="Name"
                img={instructor.img}
                isLink={true}
                name={instructor.name}
                text={instructor.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionE
