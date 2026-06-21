const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const createUserTable = async () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255),
            lastName VARCHAR(50) DEFAULT '',
            role INT DEFAULT 0,
            image VARCHAR(255),
            token VARCHAR(255),
            tokenExp BIGINT,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;

    await db.execute(sql);
};

const createUser = async (userData) => {
    const {
        name,
        email,
        password,
        lastName = "",
        role = 0,
        image = null,
        token = null,
        tokenExp = null
    } = userData;

    if (name && name.length > 50) {
        throw new Error("Name must be 50 characters or less");
    }

    if (!email) {
        throw new Error("Email is required");
    }

    if (!password || password.length < 5) {
        throw new Error("Password must be at least 5 characters long");
    }

    if (lastName && lastName.length > 50) {
        throw new Error("Last name must be 50 characters or less");
    }

    const trimmedEmail = email.trim();
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = `
        INSERT INTO users
        (name, email, password, lastName, role, image, token, tokenExp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(sql, [
        name,
        trimmedEmail,
        hashedPassword,
        lastName,
        role,
        image,
        token,
        tokenExp
    ]);

    return {
        id: result.insertId,
        name,
        email: trimmedEmail,
        lastName,
        role,
        image,
        token,
        tokenExp
    };
};

const findUserByEmail = async (email) => {
    if (!email) {
        throw new Error("Email is required");
    }

    const trimmedEmail = email.trim();

    const [rows] = await db.execute(
        "SELECT * FROM users WHERE email = ?",
        [trimmedEmail]
    );

    return rows[0];
};

const generateToken = async (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET
        // {
        //     expiresIn: "1h"
        // }
    );

    await db.execute(
        `
        UPDATE users
        SET token = ?
        WHERE id = ?
        `,
        [token, user.id]
    );

    return token;
};

const findByToken = async (token) => {
    if (!token) {
        throw new Error("Token is required");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const [rows] = await db.execute(
        `
        SELECT *
        FROM users
        WHERE id = ? AND token = ?
        `,
        [decoded.id, token]
    );

    return rows[0];
};

const updateUserPassword = async (id, newPassword) => {
    if (!id) {
        throw new Error("User id is required");
    }

    if (!newPassword || newPassword.length < 5) {
        throw new Error("Password must be at least 5 characters long");
    }

    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    const [result] = await db.execute(
        `
        UPDATE users
        SET password = ?
        WHERE id = ?
        `,
        [hashedPassword, id]
    );

    if (result.affectedRows === 0) {
        throw new Error("User not found");
    }

    return {
        id,
        passwordUpdated: true
    };
};

const removeUserToken = async (id) => {
    if (!id) {
        throw new Error("User id is required");
    }

    const [result] = await db.execute(
        `
        UPDATE users
        SET token = NULL
        WHERE id = ?
        `,
        [id]
    );
    if (result.affectedRows === 0) {
        throw new Error("User not found")
    }

    return true;
}

module.exports = {
    createUserTable,
    createUser,
    findUserByEmail,
    updateUserPassword,
    generateToken,
    findByToken,
    removeUserToken
};