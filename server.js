const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // You can choose any port you prefer

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Registration route
app.post('/register', (req, res) => {
    // Here, you can handle user registration logic
    const email = req.body.email;
    const password = req.body.password;

    // For example, you can print the data for now
    console.log('Received registration data:');
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add your registration logic here (e.g., saving to a database)

    // Respond with a confirmation message
    res.send('Registration successful!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
