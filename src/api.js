import axios from 'axios'
export default axios.create({
  baseURL: 'https://whthpnd.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json'
  }
})
