const mysql = require('mysql2');

// Replace these values with your MySQL server details
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'online_store', // Replace with your database name
    port: 8889, // Specify the correct port for MAMP's MySQL server
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL (MAMP)');

    // Example SQL queries
    // Select all records from the 'products' table
    connection.query('SELECT * FROM orders', (err, results) => {
        if (err) {
            console.error('Error executing SELECT query:', err);
            return;
        }
        console.log('orders:');
        console.log(results);
    });
})
