const express = require("express");
const router = express.Router();

/**
 * ============================
 * COMMENT ROUTES
 * ============================
 */

// Create a new comment
router.post("/", async (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Comment created"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Get single comment details by ID
router.get("/:id", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Single comment details"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Update a comment by ID
router.put("/:id", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Comment updated"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Delete a comment by ID
router.delete("/:id", async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Comment deleted"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

module.exports = router;
