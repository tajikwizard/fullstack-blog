const express = require("express");
require('./config/dbConnect')
require('dotenv').config()
const userRoutes = require("./routes/users/users"); // path to users.js
const postRoutes = require("./routes/posts/posts"); // path to posts.js
const commentRoutes = require("./routes/comments/comments"); //path to comments.js
const app = express();
const PORT = process.env.PORT ||  3000;

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})