const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

let users = [];

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Register User
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = users.find(
            (user) => user.email === email
        );

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        users.push({
            name,
            email,
            password: hashedPassword
        });

        return res.status(200).json({
            message: "Registration successful"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

// Login User
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = users.find(
            (user) => user.email === email
        );

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        return res.status(200).json({
            message: "Login successful",
            redirect: "dashboard.html"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

// Health Check
app.get("/health", (req, res) => {
    res.json({
        status: "running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
