const mysql = require('mysql2');

// Create a connection pool (recommended for performance and managing connections)
const pool = mysql.createPool({
  host: 'your_mysql_host',        // Replace with your MySQL host
  user: 'root@localhost',    // Replace with your MySQL username
  password: 'root',// Replace with your MySQL password
  database: 'online_store'      // Replace with your database name
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL');

  // You can execute queries and interact with the database here

  // Release the connection when you're done
  connection.release();
});

// Handle MySQL errors
pool.on('error', (err) => {
  console.error('MySQL pool error:', err);
});

// Export the pool for use in other parts of your application
module.exports = pool;
