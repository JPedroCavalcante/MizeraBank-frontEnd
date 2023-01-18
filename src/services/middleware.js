import Cookie from 'js-cookie';

export default {
    auth(to, from, next) {
        const token = Cookie.get('login-token');

        if (!token) {
            next('/login');
        }

        next();
    },

}