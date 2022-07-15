import axios from "axios"

export const requestsAPI = {
    createRequests(checked: boolean) {
        const body = {
            success: checked
        }
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", body)
            ;
    }
}
