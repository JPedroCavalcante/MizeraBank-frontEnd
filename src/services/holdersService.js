import axios from 'axios';
import Cookie from "js-cookie";

const token = Cookie.get('login-token');
export default class HoldersService {

    static async getAll() {
        return axios.get('/holders',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    }

    static async createHolder(params) {
        return axios.post('/holders',
            params,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    }


}