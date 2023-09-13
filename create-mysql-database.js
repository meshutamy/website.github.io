const mysql = require('mysql2');

// Replace these values with your MySQL server details
const dbConfig = {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: '', // Leave this empty for now, as we'll create a new database
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');

    // Create a new database (change 'your_database_name' to your desired name)
    const newDatabaseName = 'your_database_name';

    connection.query(`CREATE DATABASE IF NOT EXISTS ${newDatabaseName}`, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
        } else {
            console.log(`Database "${newDatabaseName}" created successfully`);
        }

        // Close the MySQL connection
        connection.end((err) => {
            if (err) {
                console.error('Error closing connection:', err);
                return;
            }
            console.log('MySQL connection closed');
        });
    });
});
