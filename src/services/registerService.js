import axios from "axios";
import Cookie from "js-cookie";

const token = Cookie.get('login-token');

export default class RegisterService {
    static async registerUser(params) {
        return axios.post('/auth/register',
            params,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    }
}