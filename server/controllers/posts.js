const express = require("express");
const postRouter = express.Router();
const Post = require("../models/PostSchema.js");
const Investment = require("../models/InvestmentSchema.js");

postRouter.get("/api/posts", (request, response) => {
    Post.find({}).then((posts) => {
      response.json(posts);
    });
  });
  postRouter.get('/api/posts:id', (request, response) => {
      Post.find({user_id: request.params.id}).then(posts => {
        response.json(posts)
        })
        
    })

    postRouter.post("/api/post", async (request, response) => {
        
      
        const body = request.body;
      
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
        });
        
        post.save().then((post) => {
          
          return response.status(200).json({ post });
        });
      });

      postRouter.post("/api/invest", async (request, response) => {
        
      
        const body = request.body;
      
        const investment = await new Investment({
          user_id: request.body.user_id,
          post_id: body.post_id,
          investment_amount: body.investment_amount,
          investment_quantity: body.investment_quantity,
          status: "active",
        });
        console.log("saving", investment);
        investment.save().then((investment) => {
          

          return response.status(200).json({ investment });
        });
      });

      postRouter.get('/api/invest:id',async (request, response) => {
        Investment.find({user_id: request.params.id}).then((investments) => {
          console.log(investments)
          response.json(investments);
        });
      
        
      });

      


module.exports = postRouter