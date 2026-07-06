const {
    findByToken
} = require("../models/User");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.x_auth;
    
        if (!token) {
            return res.json({
                isAuth: false,
                error: true,
                message: "Token not found"
            });
        }
    

        const user = await findByToken(token);

        if (!user) {
            return res.json({
                isAuth: false,
                error: true,
                message: "User not found"
            });
        }

        req.token = token;
        req.user = user;
        next();
    }
    catch (err) {
        return res.json({
            isAuth: false,
            error: true,
            message: err.message
        });
    }
}

module.exports = { auth };