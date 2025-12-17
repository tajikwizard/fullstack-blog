const express = require("express");
require('./config/dbConnect')
require('dotenv').config()
const userRoutes = require("./routes/users/users"); // path to users.js
const postRoutes = require("./routes/posts/posts"); // path to posts.js
const commentRoutes = require("./routes/comments/comments"); //path to comments.js
const globalErrorHandler = require("./middlewares/globalHandler");

const app = express();
const PORT = process.env.PORT ||  3000;

app.use(express.json()); //passing incoming data

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);



app.use(globalErrorHandler);
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})