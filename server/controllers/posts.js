const express = require("express");
const postRouter = express.Router();
const Post = require("../models/PostSchema.js");
const Investment = require("../models/InvestmentSchema.js");

postRouter.get("/api/posts", (request, response) => {
  // var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress 
  // console.log(ip)
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
          investment_date: new Date(),
          investment_amount: body.investment_amount,
          investment_quantity: body.investment_quantity,
          status: "active",
        });
        console.log("saving", investment);
        investment.save().then((investment) => {
          

          return response.status(200).json({ investment });
        });
      });
      postRouter.put("/api/invest/:id", async (request, response) => {
        
        const body = request.body
        const id = request.params.id
        let post = await Post.findOne({_id: id})
        if (!post) {
          return response.status(401).json({ error: 'post does not exist' })
        }
        post.asking_price = post.asking_price -  body.investment_amount
        post.quantity_remaining =post.quantity_remaining - body.investment_quantity
        post.save().then(post => {
          return response.status(200).json({ post })
        })
      })

      postRouter.get('/api/invest:id',async (request, response) => {
        Investment.find({user_id: request.params.id}).then((investments) => {
          console.log(investments)
          response.json(investments);
        });
      
        
      });

      


module.exports = postRouter