const express = require('express')
const apiRouter = express.Router()
const User = require('../models/UserSchema.js')

const scrub = ({ password, ...user }) => user
const scrubAuthentic = ({ password, ...user }) => user

const mongoose = require('mongoose')


const url = process.env.DBURL
            

mongoose.connect(url)
  .then((result) => {
    console.log('connected to server')
  })
  .catch((err) => console.log(err))


apiRouter.get('api/posts', (request, response) => {
    let posts = "random"
    return response.status(200).json(posts)
  })



module.exports = apiRouter