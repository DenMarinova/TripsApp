import authAxios from '@/axios-auth';
import globalStore from '../store/global';

export default {
    data: function () {
        return {}
    },
    methods: {
        signin(payload) {
            authAxios
                .post("/accounts:signInWithPassword", payload)
                .then(res => {
                    globalStore.setUser(res.data); 
                    this.$router.push("/list");
                })
                .catch(err => {
                    console.error(err);
                });
        },
        signup(payload) {
            authAxios
                .post("/accounts:signUp", payload)
                .then(res => {
                    globalStore.setUser(res.data);
                    this.$router.push("/list");
                })
                .catch(err => {
                    console.error(err);
                });
        },
        logout() {
            globalStore.clearUser();
             this.$router.push("/"); 
          }

    }
}