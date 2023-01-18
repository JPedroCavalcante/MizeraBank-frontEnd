import axios from 'axios';
import Cookie from "js-cookie";

const token = Cookie.get('login-token');
export default class HoldersService {

    static async getAll(){
        return axios.get('/holders',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    }
}