const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected');
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
})();

module.exports = pool;