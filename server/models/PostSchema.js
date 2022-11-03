const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    company_name: {type: String, required: true},
   date: {type: Date, required: true},
   description: {type: String, required: true},
   asking_price: {type: Number, required: true},
   quanitity_total: {type: Number, required: true},
   quanitity_remaining: {type: Number, required: true},
   status: {type: String, required: true},
    
})

module.exports = mongoose.model('Post', PostSchema)