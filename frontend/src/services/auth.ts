import routes from './routes'
import axios from 'axios'
import UserData from '../types/usersType'

export const auth = {
  registerStudent: async (postBody: UserData): Promise<any> => {
    return await axios.post(routes.students.create(), postBody)
  },
}
