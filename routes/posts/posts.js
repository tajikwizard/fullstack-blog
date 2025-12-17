const express = require("express");
const router = express.Router();

/**
 * ============================
 * POST ROUTES
 * ============================
 */

// Get all posts
router.get("/", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Post list"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Create a new post
router.post("/", async (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Post created"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Get single post details by ID
router.get("/:id", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Single post details"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Update a post by ID
router.put("/:id", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Post updated"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Delete a post by ID
router.delete("/:id", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Post deleted"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

module.exports = router;
