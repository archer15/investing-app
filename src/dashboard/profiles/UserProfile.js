import React from 'react'
import { fetch_user_post } from '../../API/posting'
import { useState, useEffect } from 'react'
import PostList from '../posts/PostList'
const UserProfile = ({user}) => {
  const [postList, setPostList] = useState([])
    console.log("id ", user)
    const loadUserPosts = (id) => {
      fetch_user_post(id).catch((error) => {
        console.log("error", error)
    })
    .then(res => {
        let organisedData = res.map((item ) => {
            let newDate = item?.date?.slice(0,10)
            item.date = newDate
            return item
            })
        console.log(res)
        setPostList(organisedData)
    })
    }

    useEffect(() => {
        if(user) {
          loadUserPosts(user._id)
        }
      }, [user]);
      if(user) {
        return (

            <div>
            <div className='text-center text-lg border w-[400px] mx-auto py-5 '>User Profile
                <div > {user.first_name}</div>
                <div > {user.last_name} </div>
                <div > {user.email} </div>
            </div>
            <div className='grid grid-col-2 '>
              <div className='flex-col flex text-center w-[50%]'>
                Your posts
                <PostList user={user} postList={postList}/> 
                <div className='text-right '>Yosss</div>
              </div>
              
            </div>
            
            
            </div>
          )
      }
  
}

export default UserProfile