const express = require('express');
const app = express();

// 🚨 VULNERABILITY (Security Hotspot): Hardcoded credentials
const DB_PASSWORD = "super_secret_password_123!";
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

// 🚨 CODE SMELL: Unused variable
const deprecatedVariable = "This is never used anywhere";

app.get('/login', (req, res) => {
    let username = req.query.user;

    // 🚨 BUG: Assignment inside an if-statement (should be '===')
    if (username = "admin") {
        console.log("Admin login attempted");
    }

    // 🚨 VULNERABILITY (Security): SQL Injection risk via string concatenation
    let dbQuery = "SELECT * FROM users WHERE username = '" + username + "'";
    
    // 🚨 CODE SMELL: Commented out code (Technical Debt)
    // database.execute(dbQuery);

    res.status(200).send("Login processed");
});

// 🚨 CODE SMELL: Duplicated Code (Block 1)
app.get('/calculate/tax2023', (req, res) => {
    let income = parseInt(req.query.income) || 0;
    let tax = 0;
    if (income > 50000) {
        tax = income * 0.20;
    } else {
        tax = income * 0.10;
    }
    res.json({ year: 2023, taxOwed: tax });
});

// 🚨 CODE SMELL: Duplicated Code (Block 2 - almost identical to Block 1)
app.get('/calculate/tax2024', (req, res) => {
    let income = parseInt(req.query.income) || 0;
    let tax = 0;
    if (income > 50000) {
        tax = income * 0.20;
    } else {
        tax = income * 0.10;
    }
    res.json({ year: 2024, taxOwed: tax });
});

const port = process.env.PORT || 3000;
// Prevent the app from listening if it's being tested
if (require.main === module) {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
