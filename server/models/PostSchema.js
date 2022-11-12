const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    title: {type: String, required: true},
    company_name: {type: String, required: true},
   date: {type: Date, required: true},
   description: {type: String, required: true},
   asking_price: {type: Number, required: true},
   quantity_total: {type: Number, required: true},
   quantity_remaining: {type: Number, required: false},
   status: {type: String, required: true},
    
})

module.exports = mongoose.model('Post', PostSchema)