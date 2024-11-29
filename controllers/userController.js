const pool = require('../config/db');
const logger = require('../config/logger');

exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await pool.execute('SELECT id, username, role FROM users');
    res.json(users);
  } catch (error) {
    logger.error(`Error fetching users: ${error.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    logger.error(`Error deleting user: ${error.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};
