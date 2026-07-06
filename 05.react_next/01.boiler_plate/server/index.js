// index.js
const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const {
    createUserTable,
    createUser,
    updateUserPassword,
    findUserByEmail,
    generateToken,
    removeUserToken
} = require("./models/User");

const { auth } = require("./middleware/auth")

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/hello", (req, res) => {
    res.send("Hi")
});

app.post("/api/users/register", async (req, res) => {
    try {
        const user = await createUser(req.body);

        return res.status(200).json({
            success: true,
            user
        });
    } catch (err) {
        return res.json({
            success: false,
            error: err.message
        });
    }
});

app.post("/api/users/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await findUserByEmail(email);

        if (!user) {
            return res.json({
                loginSuccess: false,
                message: " Email not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                loginSuccess: false,
                message: "Wrong password"
            });
        }

        const token = await generateToken(user);

        return res.cookie("x_auth", token).status(200).json({
                            loginSuccess: true,
                            email: user.email
        });

    }
    catch (err) {
        return res.json({
            loginSuccess: false,
            error: err.message
        });
    }
});

app.get("/api/users/auth", auth, async (req, res) => {
    res.status(200).json({
        isAuth: true,
        isAdmin: req.user.role === 0 ? false : true,
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image
    });
});

app.post("/api/users/change-password", async (req, res) => {
    try {
        const { id, newPassword } = req.body;

        const result = await updateUserPassword(id, newPassword);

        return res.status(200).json({
            success: true,
            result
        });
    } catch (err) {
        return res.json({
            success: false,
            error: err.message
        });
    }
});

app.get("/api/users/logout", auth, async (req, res) => {
    try {
        await removeUserToken(req.user.id);

        return res.clearCookie("x_auth")
                    .status(200)
                    .json({
                        success: true
                    });
    }
    catch{
        return res.json({
            success : false,
            error: err.message
        });
    }
});

createUserTable()
    .then(() => {
        console.log("users table is ready");

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Failed to create users table:", err);
    });