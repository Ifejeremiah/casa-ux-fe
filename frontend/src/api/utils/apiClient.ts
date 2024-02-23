import axios from 'axios'
import { API_ROUTE } from '../apiRoutes'
import { Email } from '../../types/waitListType'

const apiClient = axios.create({ baseURL: 'https://casa-ux.onrender.com' })

export const addToWaitList = (email: Email) => {
  return apiClient.post(API_ROUTE.WAITLIST, { email })
}
