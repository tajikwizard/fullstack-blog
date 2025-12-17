const register  = async (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            message: 'new User registered successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const login = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'User logged in successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const logout = (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'User logged out successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const getSingleUser = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Single user details.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const getProfileDetails = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Profile user details.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const updateProfileImage = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Profile image uploaded successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const updateCoverPhoto = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Cover image uploaded successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const updateUserDetails = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'User updated successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}
const updateUserPassword = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'User password updated successfully.'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}

module.exports = {
    register,
    login,
    logout,
    getSingleUser,
    getProfileDetails,
    updateProfileImage,
    updateCoverPhoto,
    updateUserDetails,
    updateUserPassword,
};