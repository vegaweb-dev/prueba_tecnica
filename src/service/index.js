import axios from 'axios'

axios.defaults.baseURL = "https://reqres.in/api"

let token = window.localStorage.getItem("token") || null

// header para las peticiones posterior al login
const headers = {

  Authorization: token
}

export const ApiService = {
  async login(data) {
    try {
      const res = await axios.post("/login", data)
      window.localStorage.setItem("token", res.data.token)
    } catch (e) {
      console.log(e)
    }
  },
  async create(data) {
    try {
      const res = await axios.post("/users", data, { headers })
      console.log(res)
    } catch (error) {
      console.log(error)

    }
  },
  async getUsers() {
    try {
      const response = await axios.get('/users?page=2', { headers })

      return response.data.data

    } catch (e) {
      console.log(e)
    }
  }
}



