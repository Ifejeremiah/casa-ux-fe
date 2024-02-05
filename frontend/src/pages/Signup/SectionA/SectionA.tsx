import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../component/Button/Button'
// import UserData from '../../../types/usersType'
import { useNavigate } from 'react-router-dom'

const SectionA = () => {
  interface FormData {
    [key: string]: string
  }
  const navigate = useNavigate()
  const [shownField, setShownField] = useState(true)
  const [shownButton, setShownButton] = useState(true)
  const [seePassword, setSeePassword] = useState(false)
  const [seeConPassword, setSeeConPassword] = useState(false)

  // const [formData, setFormData] = useState<UserData>({
  //   first_name: '',
  //   last_name: '',
  //   email_address: '',
  //   residential_address: '',
  //   level_of_proficiency: '',
  //   education_status: '',
  // })

  interface FieldConfig {
    id: string
    name: string
    label: string
    isDropdown?: boolean // Add this property for dropdown fields
    isShown: boolean
    options?: string[]
    isPassword?: boolean
    isConfirmPassword?: boolean
    isEmail?: boolean
    hasIcon: boolean
    isIcon?: string
  }
  const fieldConfigs: FieldConfig[] = [
    {
      id: 'first_name',
      name: 'first_name',
      label: 'First Name',
      isShown: shownField,
      isIcon: '/icons/user3.svg',

      hasIcon: true,
    },
    {
      id: 'last_name',
      name: 'last_name',
      label: 'Last Name',
      isShown: shownField,
      isIcon: '/icons/user3.svg',
      hasIcon: true,
    },
    {
      id: 'email_address',
      name: 'email_address',
      label: 'Email Address',
      isShown: shownField,
      isEmail: true,
      isIcon: '/icons/email2.svg',
      hasIcon: true,
    },
    {
      id: 'residential_address',
      name: 'residential_address',
      label: 'Residential Address',
      isShown: shownField,
      isIcon: '/icons/location2.svg',
      hasIcon: true,
    },
    {
      id: 'education_status',
      name: 'education_status',
      label: 'Education Status',
      isShown: shownField,
      isDropdown: true,
      options: ['SSCE', 'PHD', 'POD'],
      isIcon: '/icons/education.svg',
      hasIcon: true,
    },
    {
      id: 'level_of_proficiency',
      name: 'level_of_proficiency',
      label: 'Level of proficiency',
      isShown: shownField,
      isDropdown: true,
      options: ['beginner', 'intermediate', 'advanced'],
      hasIcon: true,
      isIcon: '/icons/brain2.svg',
    },

    {
      id: 'gender',
      name: 'gender',
      label: 'Gender',
      isShown: !shownField,
      isDropdown: true,
      options: ['Male', 'Female'],
      hasIcon: true,
      isIcon: '/icons/gender.svg',
    },
    {
      id: 'empolyment_status',
      name: 'empolyment_status',
      label: 'Empolyment Status',
      isShown: !shownField,
      isDropdown: true,
      options: ['Employed', 'Unemployed', 'Self-Employed'],
      isIcon: '/icons/employ.svg',
      hasIcon: true,
    },

    {
      id: 'linkedIn_profile',
      name: 'linkedIn_profile',
      label: 'LinkedIn Profile',
      isShown: !shownField,
      isDropdown: false,
      isIcon: '/icons/link.svg',
      hasIcon: true,
    },

    {
      id: 'password',
      name: 'password',
      label: 'Password',
      isShown: !shownField,
      isDropdown: false,
      isPassword: true,
      isIcon: '/icons/eye.svg',
      hasIcon: true,
    },
    {
      id: 'confirm_passowrd',
      name: 'confirm_passowrd',
      label: ' Confirm Password',
      isShown: !shownField,
      isDropdown: false,
      isConfirmPassword: true,
      isIcon: '/icons/eye.svg',
      hasIcon: true,
    },
  ]

  const [formData, setFormData] = useState<FormData>(
    fieldConfigs.reduce((acc, field) => {
      acc[field.name] = ''
      return acc
    }, {} as FormData)
  )

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault()

    // Clear the error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }))

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleValidationError = (
    fieldName: string,
    value: string,
    isDropdown?: boolean,
    field?: FieldConfig
  ) => {
    let errorMessage = ''

    // Add validation logic here based on your requirements
    // For example, checking if the field is empty
    if (!value.trim()) {
      errorMessage = 'This field is required.'
    } else if (field && field.isPassword && !isPasswordValid(value)) {
      errorMessage =
        'Password must be  at least 8 characters and include letters and numbers'
    } else if (field && field.isEmail && !isEmails(value)) {
      errorMessage = 'Invalid email format'
    }
    console.log('Email Validation Result:', isEmails(value))

    if (field && field.isConfirmPassword) {
      const confirmPasswordValue = formData[field.name]
      if (!confirmPasswordValue.trim()) {
        errorMessage = 'Comfirm Password is  required'
      } else if (
        !isconfirmPassword(confirmPasswordValue, formData['password'])
      ) {
        errorMessage = 'Password do not match'
      }
    }

    if (isDropdown && value.trim() === '') {
      // Additional validation for dropdown fields
      errorMessage = 'Please select an option.'
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }))
  }
  const handleFirstSixValidation = () => {
    const newErrors: Record<string, string> = {}

    // Validate the first five fields
    fieldConfigs.slice(0, 6).forEach((field) => {
      const fieldValue = formData[field.name]

      console.log(`Field: ${field.name}, Value: ${fieldValue}`)

      if (!fieldValue || (field.isDropdown && fieldValue.trim() === '')) {
        // Consider the field empty and treat it as an error
        newErrors[field.name] = field.isDropdown
          ? 'Please select an option.'
          : 'This field is required.'
      } else if (field.isEmail && !isEmails(fieldValue)) {
        newErrors[field.name] = 'Invalid email format'
      }
    })

    // Log the newErrors object
    console.log('New Errors:', newErrors)

    // Update the errors state with the newErrors
    setErrors(newErrors)

    // Check if there are no errors before updating the shownField state
    if (Object.values(newErrors).every((error) => !error)) {
      setShownField(!shownField)
      setShownButton(!shownButton)
    }
  }

  const handleSubmitRemainingSix = () => {
    // Check if there are remaining fields to validate
    if (fieldConfigs.length <= 6) {
      console.log('No remaining fields to validate or submit.')
      return
    }

    // Validate the remaining five fields
    fieldConfigs.slice(6).forEach((field) => {
      const fieldValue = formData[field.name]
      handleValidationError(field.name, fieldValue, field.isDropdown, field)
    })

    // Check if there are no errors before submitting
    if (Object.values(errors).every((error) => !error)) {
      // Perform form submission logic here for the remaining five fields
      console.log('Form submitted successfully!')
      console.log(formData)
      navigate('/welcome-dashboard')
    }
  }

  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(password)
  }
  const isconfirmPassword = (confirmPassword: string, password: string) => {
    return confirmPassword === password
  }
  const isEmails = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }
  const viewPassword = () => {
    setSeePassword(!seePassword)
  }
  const viewConPassword = () => {
    setSeeConPassword(!seeConPassword)
  }

  return (
    <section className="signup-section">
      <div className="d-flex  align-items-center h-100 w-100 p-3 p-lg-0 glass-form-con">
        <div className="glass-form col-lg-10 flex-column">
          <h3 className="header_text">User Information</h3>

          <form className="row gap-2">
            {fieldConfigs.map((field) => (
              <div
                key={field.id}
                className="col-lg-5 my-3"
                style={{ display: field.isShown ? 'block' : 'none' }}
              >
                <div className="input-glass-con input-con">
                  {field.isEmail ? (
                    <input
                      type="email"
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.label}
                    />
                  ) : field.isPassword ? (
                    <>
                      {field.hasIcon ? (
                        <img
                          src={
                            seePassword ? field.isIcon : '/icons/eye-closed.svg'
                          }
                          onClick={viewPassword}
                          alt=""
                        />
                      ) : (
                        ''
                      )}

                      <input
                        type={seePassword ? 'text' : 'password'}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.label}
                      />
                    </>
                  ) : field.isConfirmPassword ? (
                    <>
                      {field.hasIcon ? (
                        <img
                          src={
                            seeConPassword
                              ? field.isIcon
                              : '/icons/eye-closed.svg'
                          }
                          alt=""
                          onClick={viewConPassword}
                        />
                      ) : (
                        ''
                      )}
                      <input
                        type={seeConPassword ? 'text' : 'password'}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.label}
                      />
                    </>
                  ) : field.isDropdown ? (
                    <>
                      {field.hasIcon ? <img src={field.isIcon} /> : ''}

                      <select
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                      >
                        <option>{field.label}</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <>
                      {field.hasIcon ? <img src={field.isIcon} /> : ''}
                      <input
                        type="text"
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.label}
                      />
                    </>
                  )}
                </div>
                <div className="error-text mt-2">{errors[field.name]}</div>
              </div>
            ))}

            <div style={{ display: shownButton ? 'flex' : 'none' }}>
              <Button
                btnSize="xl"
                hasIcon={true}
                hasLeftIcon={false}
                icon="/icons/chevron-right.svg"
                isLink={false}
                btnType="prim"
                text="Next"
                onClick={handleFirstSixValidation}
              />
            </div>

            <div
              className="gap-3"
              style={{ display: shownButton ? 'none' : 'flex' }}
            >
              <Button
                btnSize="xl"
                hasIcon={false}
                hasLeftIcon={true}
                icon="/icons/chevron-left-dark.svg"
                isLink={false}
                btnType="darkbtn"
                text="Back"
                onClick={() => {
                  setShownButton(!shownButton)

                  setShownField(!shownField)
                }}
              />
              <Button
                btnSize="xl"
                hasIcon={true}
                hasLeftIcon={false}
                icon="/icons/chevron-right.svg"
                isLink={false}
                btnType="prim"
                text="Submit"
                onClick={handleSubmitRemainingSix}
              />
            </div>
          </form>

          <div className="glass-form-footer mt-3 ">
            <div className="d-flex gap-2 align-center-center ">
              {' '}
              <p>Already registered? </p>
              <Link to={'/login'}>Log into your dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionA
