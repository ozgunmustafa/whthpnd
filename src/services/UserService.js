import api from '../api'

class UserService {
  registerUser(data) {
    return api.post('/auth/register', data)
  }
  loginUser(data) {
    return api.post('/auth/login', data)
  }
  getAllUsers() {
    return api.get('/users')
  }
  getUser(id) {
    return api.get(`/users/${id}`)
  }

  update(id, data) {
    return api.put(`/tutorials/${id}`, data)
  }
  delete(id) {
    return api.delete(`/tutorials/${id}`)
  }
}
export default new UserService()
