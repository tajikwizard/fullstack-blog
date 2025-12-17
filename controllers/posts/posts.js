const getAllPosts = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Post list"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

const createPost =async (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Post created"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

const getPost = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Single post details"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

const updatePost = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Post updated"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}


const deletePost = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Post deleted"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

module.exports = {
getAllPosts,
createPost,
getPost,
updatePost,
deletePost
};