const express = require("express");
const router = express.Router();
const {createComment,getComment,updateComment,deleteComment} =  require("../../controllers/comments/comments");


router.post("/",createComment );
router.get("/:id", getComment);
router.put("/:id", updateComment);
router.delete("/:id",deleteComment );

module.exports = router;
