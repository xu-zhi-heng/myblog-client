const User = {
    state: {
        user: null
    },
    getters: {
        user: state => {
            let user = state.user
            if(user) {
                return user
            }else {
                return null
            }
        }
    },
    mutations: {
        setUser: (state,user) => {
            state.user = user
        },
    }
}
export default User