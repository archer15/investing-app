import axios from "axios";
const URL = "http://localhost:3001/";

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
export const fetch_user_post = (id) => {
    var posts
    try {
        posts = axios.get(`http://localhost:3001/api/posts${id}`)
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
  const log = axios
    .post(`http://localhost:3001/api/post`, post)
    .then((response) => {
      //console.log(response.data)
      if (response.error) {
        console.log("error");
        return;
      } else {
        const posts = response.data;
        console.log(response.data);
        return posts;
      }
    });
  return log;
};

export const invest_in_stock_post = (investment) => {
  const log = axios
    .post(`http://localhost:3001/api/invest`, investment)
    .then((response) => {
      //console.log(response.data)
      if (response.error) {
        console.log("error");
        return;
      } else {
        const investment = response.data;
        console.log(response.data);
        return investment;
      }
    });
  return log;
};
export const update_stock_investment = (investment, id) => {
  const log = axios
    .put(`http://localhost:3001/api/invest/${id}`, investment)
    .then((response) => {
      //console.log(response.data)
      if (response.error) {
        console.log("error");
        return;
      } else {
        const investment = response.data;
        console.log(response.data);
        return investment;
      }
    });
  return log;
};

export const fetch_user_investments = (id) => {
  var invest
  try {
    invest = axios.get(`http://localhost:3001/api/invest${id}`)
      .then(response => {
          //console.log(response.data)
          if(response.error) {
              console.log("error")
              return
          } else {
              const valid = response.data
              return valid
          }
      })
  }
  catch(error) {

  }
  return invest
}
