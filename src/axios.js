import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common['Authorization']="Bearer "+ localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] = "application/json";