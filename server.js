const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

// IMPORTANT
app.use(express.static(__dirname));

let users = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", async (req, res) => {
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

    res.json({
        message: "Registration successful"
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        (user) => user.email === email
    );

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        });
    }

    const valid = await bcrypt.compare(
        password,
        user.password
    );

    if (!valid) {
        return res.status(400).json({
            message: "Invalid credentials"
        });
    }

    res.json({
        message: "Login successful",
        redirect: "dashboard.html"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
