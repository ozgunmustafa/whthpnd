import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api'
//const baseURL: 'https://whthpnd.herokuapp.com/api',

const token =
  typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
console.log(token)
export default axios.create({
  baseURL: BASE_URL
})

export const privateEndpoint = () => {
  const token = localStorage.getItem('access_token')
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWFkMjJhNjQyNThkOWM4YmM1ZmYxMCIsIm5hbWUiOiJNdXN0YWZhIiwiaWF0IjoxNjU1MzY1NzE1LCJleHAiOjE2NTUzNjYzMTV9.TBEQemXxW1B0SARD3yUefTvk1VHmvGhXKIx51QVqCvE`,
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWFkMjJhNjQyNThkOWM4YmM1ZmYxMCIsIm5hbWUiOiJNdXN0YWZhIiwiaWF0IjoxNjU1Mzc2Mzk4LCJleHAiOjE2NTUzNzY5OTh9.YL7bGio9sOVTBrg3WuCpaLu-4wJaa97dmLAKfuXgEjU`,
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
