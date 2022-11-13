const express = require("express");
const postRouter = express.Router();
const Post = require("../models/PostSchema.js");
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
        console.log("called");
      
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
        console.log("saving", post);
        post.save().then((post) => {
          console.log("saved");
          return response.status(200).json({ post });
        });
      });

      postRouter.put("/api/invest", async (request, response) => {
        console.log(request.body);
        let investment = request.body;
      
        const post = await Post.findOne({ _id: investment.id });
      
        if (!post) {
          return response.status(401).json({ error: "post does not exist" });
        }
      
        console.log(post);
      
        // post.user_id = investment.user_id
        //   ? investment.user_id
        //   : post.user_id
        //   ? post.user_id
        //   : "";
      
        // post.quantity_remaining = 0;
        // post.save();
        response.json({ ownership_amount: 5 });
      
      
        // let ownershipAmount =
        //   ((investment.investment_amount ) * 100) /
        //   post.quantity_remaining;
      
        // let remainingAmount = post.quantity_remaining - ownershipAmount;
        // console.log("yo", remainingAmount);
      });
      


module.exports = postRouter