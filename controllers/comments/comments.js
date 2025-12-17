
const createComment = async (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Comment created"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}


const getComment = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Single comment details"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

const updateComment = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Comment updated"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

const deleteComment = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Comment deleted"
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

module.exports = {
createComment,
getComment,
updateComment,
deleteComment
}