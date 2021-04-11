import axios from 'axios'

const instance = axios.create({
    baseURL: "https://mern-tinder-backnd.herokuapp.com"
})

export default instance;