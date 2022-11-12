import axios from "axios";
const URL = 'http://localhost:3001/'

export const fetch_posts = () => {
    var posts
    try {
        posts = axios.get("http://localhost:3001/api/posts")
        .then(response => {
            //console.log(response.data)
            if(response.error) {
                console.log("error")
                return
            } else {
                const validJobs = response.data
                return validJobs
            }
        })
    }
    catch(error) {

    }
    return posts
}
export const list_post = (post) => {
    
    const log = axios.post(`http://localhost:3001/api/post`, post)
    .then(response => {
        //console.log(response.data)
        if(response.error) {
            console.log("error")
            return
        } else {
            const posts = response.data
            console.log(response.data)
            return posts
        }
    })
    return log
}