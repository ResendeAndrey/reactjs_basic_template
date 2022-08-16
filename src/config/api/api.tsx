import axios from 'axios'

const baseURL = process.env.REACT_APP_API_RUL || 'https//xxxxxxxxxx.com'

export default () =>
  axios.create({
    baseURL,
  })
