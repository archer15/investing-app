import React, { Component, useState, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom"; 
  import axios from 'axios';


import Login from "../user/login";
import Signup from "../user/signup";

  const Navigation = () => {
    const [user, setUser] = useState(false)

    const submitSignup = async () => {
        const user = {
            first_name: "josh",
            last_name: "archer",
            email: "joshua.archer@gmail.com",
            password: "1234"

        }
    
        await axios.post(`http://localhost:3001/api/register`, user)
        .then(response => {
            console.log(response.data)
            if(response.error) {
                console.log("error")
                return
            } else {
                //
                
            }
        })

    }


    const submitLogin = async () => {
        const user = {
            
            email: "joshua.archer@gmail.com",
            password: "1234",

        }
        await axios.post(`http://localhost:3001/api/login`, user)
        .then(response => {
            console.log(response.data)
            if(response.error) {
                console.log("error")
                return
            } else {
                setUser(response.data.user)
                
            }
        })
    }





    if(user) {
        return ( 
            <div>{user.email}</div>
            
        )
    }

    else {
        return (
        
        <div>
            
            <button onClick={() =>submitSignup()}>Sign Up</button>
            <button onClick={() => submitLogin()}>Login</button>
            
        </div>
    )
  }
}

  export default Navigation