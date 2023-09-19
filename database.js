const mysql = require('mysql2');

// Replace these values with your MySQL server details
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'online_store', // Replace with the name of your existing database
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

    // Now you can use 'connection' to perform database operations on your existing database

    // For example, you can execute a SELECT query
    connection.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
        } else {
            console.log('Query results:', results);
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
