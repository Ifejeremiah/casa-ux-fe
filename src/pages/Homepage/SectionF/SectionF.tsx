import { useState } from 'react'
import { Email } from '../../../types/waitListType'
import { addToWaitList } from '../../../api/utils/apiClient'

const SectionF = () => {
  const [email, setEmail] = useState<Email>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitted, setIsubmitted] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsubmitted(true)
    if (!email.trim()) {
      setErrorMessage('Please enter your email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await addToWaitList(email)

      console.log('Added to waitList :', response)
      setEmail('')
      setErrorMessage('')
      alert('You have  been added to the waitlist')
    } catch (error) {
      console.log('Error adding to waitlist:', error)
      setErrorMessage(
        'There is a problem adding you to the wait list: Please try again'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>{errorMessage}</p>
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {isSubmitted && !email.trim() && <p> Please enter you email</p>}

          <button type="submit">{isLoading ? 'loading...' : 'Submit'}</button>
        </div>
      </form>
    </div>
  )
}

export default SectionF
