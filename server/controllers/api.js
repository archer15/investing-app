const express = require('express')
const apiRouter = express.Router()
const User = require('../models/UserSchema.js')
const Post = require('../models/PostSchema.js')
const bcrypt = require('bcrypt')
const scrub = ({ password, ...user }) => user
const scrubAuthentic = ({ password, ...user }) => user

const mongoose = require('mongoose')


const url = process.env.DBURL

mongoose.connect(url)
  .then((result) => {
    console.log('connected to server')
  })
  .catch((err) => console.log(err))


apiRouter.post('/api/register', async (request, response) => {
    const body = request.body
    
    const existingEmail = await User.findOne({email: body.email})
    if(existingEmail) {
        return response.status(400).json({ error: 'Existing user with this username or email.' })
    } 
    const encryptedPassword = bcrypt.hashSync(body.password, 10)

    const user = await new User({
        first_name: body.first_name,
        last_name: body.last_name,
       email: body.email,
       password: encryptedPassword,
    })
    user.save().then(user => {
        console.log('saved')
        return response.status(200).json({user: scrubAuthentic(user.toJSON())})
    })

})
apiRouter.post('/api/post', async (request, response) => {
  console.log('called')

      const body = request.body
  
      const post = await new Post({
        user_id: body.user_id,
        title: body.title,
        company_name: body.company_name,
       date: body.date,
       description: body.description,
       asking_price: body.asking_price,
       quantity_total: body.quantity_total,
       quantity_remaining: body.quantity_total,
       status: "active", 
      })
      console.log("saving", post)
      post.save().then(post => {
          console.log('saved')
          return response.status(200).json({post})
      })
  
})
apiRouter.post('/api/login', async (request, response) => {
    console.log("post request initialised")
    const UEmail = request.body.email
    const PWord = request.body.password
    
  
    const user = await User.findOne({ email: UEmail })
  
    if (!user) {
      return response.status(401).json({ error: 'invalid user or password' })
    }
    console.log('Got User', user)
    if(bcrypt.compareSync(PWord, user.password)) {
      console.log("password is good")
      
      return response.status(200).json({ user: scrub(user.toJSON())})
  
    } else if (user.password === PWord) {
      console.log('Got User', user)
      return response.status(200).json({ user: scrubAuthentic(user.toJSON()) })
    }
    return response.status(401).json({ error: 'invalid user or password' })
  })

  apiRouter.get('/api/users', (request, response) => {
    User.find({}).then(users => {
      response.json(users)
      })
  })

  apiRouter.get('/api/posts', (request, response) => {
    Post.find({}).then(posts => {
      response.json(posts)
      })
      
  })



module.exports = apiRouter