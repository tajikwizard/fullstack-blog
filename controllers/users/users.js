const User = require("../../model/user/User");
const appError = require("../../utils/appError");
const {hashPassword, verifyPassword } = require("../../utils/passwordHash");

const register = async (req, res,next) => {
    const { fullname, email, password } = req.body;
    if(!fullname || !email || !password){
        return next(appError("All fields are required!"));
    }
    try {
        const emailNormalized = email.toLowerCase().trim();

        const userFound = await User.findOne({ email: emailNormalized });
        if (userFound) {
           return next(appError('User already exists', 409));
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            fullname,
            email: emailNormalized,
            password: hashedPassword
        });

        const { password: _, ...userWithoutPassword } = user._doc;

        res.status(201).json({
            status: 'success',
            data: userWithoutPassword
        });

    } catch (error) {
        return next(appError("Server error ", 500))
    }
};

const login = async (req, res,next) => {
    const { email, password } = req.body;
    if(!email || !password){
        return next(appError("All fields are required!"));
    }
    try {
        const emailNormalized = email.toLowerCase().trim();

        const userFound = await User.findOne({ email: emailNormalized });
        if (!userFound) {
            return next(appError("Invalid credentials ", 401))
        }

        const isValid = await verifyPassword(password, userFound.password);
        if (!isValid) {
            return next(appError("Invalid credentials ", 401))
        }

        const { password:_, ...userWithoutPassword } = userFound._doc; //omiting the password

        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            user: userWithoutPassword
        });

    } catch (error) {
       return next(appError("Server error ", 500))
    }
};
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