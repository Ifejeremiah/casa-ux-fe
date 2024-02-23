import Button from '../../../component/Button/Button'
import './SectionA.css'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'

interface FormikProps {
  email: string
  password: string
}
interface FormErrors {
  email: string | null
  password: string | null
}

const validate = (values: FormikProps): FormErrors => {
  const errors: FormErrors = {
    email: null,
    password: null,
  }

  if (!values.email) {
    errors.email = 'Email is Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  } else {
    errors.email = null // No error
  }

  // Validation for password field
  if (!values.password) {
    errors.password = 'Password is Required'
  } else {
    errors.password = null // No error
  }

  return errors
}

const SectionA = () => {
  const formik = useFormik<FormikProps>({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div className="section-a-con" style={{ marginTop: '10rem' }}>
      <div className="row justify-content-between">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
            stiffness: 100,
            damping: 80,
          }}
          className="col-lg-5 "
        >
          <h2 className="welcome-text">
            <span className="dark-text">Welcome to </span>{' '}
            <span className="casa-text">Casa UX </span> Boot Camp – Where tech
            Dreams Take Flight!
          </h2>
        </motion.div>
        <motion.div
          className="col-lg-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="login-box" variants={item}>
            <h3>Login</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-con my-3">
                <span>
                  <img src="/icons/User.svg" alt="" />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}

              <div className="input-con my-3">
                <span>
                  <img src="/icons/Lock.png" alt="" />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.password ? <p>{formik.errors.password}</p> : null}

              <div className="d-flex justify-content-between mt-2 flex-wrap">
                <Button
                  btnSize="xl"
                  btnType="prim"
                  isLink={false}
                  text="Login"
                  hasIcon={true}
                  icon="/icons/chevron-right.svg"
                  hasLeftIcon={false}
                  isSubmit={true}
                />
                <a href="" className="link_text">
                  Forgot password?
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionA
