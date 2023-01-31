import axios from "axios";

export default class LoginService {
    static async loginUser(params) {
        return axios.post('/auth/login', params)
    }
}