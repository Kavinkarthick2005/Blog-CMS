const express = require("express");
const Post = require("./models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.render("index", { posts });
});

router.post("/add", async (req, res) => {
    const newPost = new Post({ title: req.body.title, content: req.body.content });
    await newPost.save();
    res.redirect("/");
});

module.exports = router;
