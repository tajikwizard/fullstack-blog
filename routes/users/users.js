const express = require("express");
const router = express.Router();
const {register,login,logout,getSingleUser,getProfileDetails,updateProfileImage,updateCoverPhoto,updateUserDetails,updateUserPassword,} = require("../../controllers/users/users");


router.post("/register",register );
router.post("/login",login);
router.get("/logout",logout );
router.get("/:id",getSingleUser );
router.get("/profile/:id",getProfileDetails );
router.put("/profile-photo-upload/:id",updateProfileImage );
router.put("/cover-photo-upload/:id",updateCoverPhoto );
router.put("/update/:id", updateUserDetails);
router.put("/update-password/:id", updateUserPassword);

module.exports = router;
