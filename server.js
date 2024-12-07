const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

let users = []; // This will store users (in-memory for now)

// Endpoint to register a user
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user data (for now, we're storing it in-memory)
    users.push({ name, email, password: hashedPassword });

    return res.status(200).json({ message: "Registration successful" });
});

// Endpoint to verify login credentials
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    // Compare the entered password with the stored password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // If password matches, redirect to dashboard
    res.status(200).json({ message: "Login successful", redirect: "dashboard.html" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
