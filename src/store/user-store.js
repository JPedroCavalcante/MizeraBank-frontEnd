import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        id: null,
        name: null,
        email: null,
        token: null,
    }),

    actions: {
        async setUserDetails(res) {
            this.$state.id = res.data.id
            this.$state.name = res.data.name
            this.$state.email = res.data.email
            this.$state.token = res.data.token
        },

        clearUser() {
            this.$state.id = null
            this.$state.name = null
            this.$state.email = null
            this.$state.token = null
        }
    },
    persist: true,
})