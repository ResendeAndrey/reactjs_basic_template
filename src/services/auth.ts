import { useAuth } from './../context/authContext';
import { AxiosResponse } from 'axios'
import Axios from '../config/api/api'
import { setLoggedInUser } from '../utils/hooks/useAuth';

export default (() => {
  const axios = Axios()
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