import { useAuth } from './../context/authContext';
import { AxiosResponse } from 'axios'
import Axios from '../config/api/api'

export default (() => {
  const axios = Axios()
  const { setLoggedInUser } = useAuth()
  return {
    create: (data: object) => {
      return axios.post('/create',data)
    },
    login: (data: object) => {
      return axios.post('/login', data).then((response: AxiosResponse) => {
        if(response.status === 200) {
          setLoggedInUser(response.data.data)
        }
      })
    }
  }
})()