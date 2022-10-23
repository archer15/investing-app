import axios from "axios";
const URL = 'http://localhost:3001/'

export const register = (user) => {
    
    const log = axios.post(`http://localhost:3001/api/register`,user)
    .then(response => {
        console.log(response.data)
        if(response.error) {
            console.log("error")
            return
        } else {
            const validUser = response.data
            return validUser
        }
    })
    return log
}

export const login = (user) => {
    
    const log = axios.post(`http://localhost:3001/api/login`,user)
    .then(response => {
        //console.log(response.data)
        if(response.error) {
            console.log("error")
            return
        } else {
            const validUser = response.data
            console.log(response.data)
            return validUser
        }
    })
    return log
}