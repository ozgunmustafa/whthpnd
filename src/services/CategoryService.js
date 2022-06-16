import axios, { axiosPrivate, privateEndpoint } from '../api'

class CategoryService {
  getAllCategories() {
    return axios.get('/categories')
  }
  getSingleCategory(id) {
    return axios.get(`/categories/${id}`)
  }
  followCategory(id) {
    console.log(id)
    return axiosPrivate.get(`/categories/${id}/follow`)
  }
}
export default new CategoryService()
