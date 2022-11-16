const mongoose = require('mongoose')

const InvestmentSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    post_id: {type: String, required: true},
    investment_date: {type: Date, required: true},
    investment_amount: {type: Number, required: true},
    investment_quantity: {type: Number, required: true},
   status: {type: String, required: true},
   
    
})

module.exports = mongoose.model('Investment', InvestmentSchema)