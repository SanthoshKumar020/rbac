const pool = require('../config/db');
const logger = require('../config/logger');


exports.createRole = async (req, res) => {
  const { name, permissions } = req.body;

  try {
    // Insert the role into the roles table
    const [roleResult] = await pool.execute(
      'INSERT INTO roles (name) VALUES (?)',
      [name]
    );
    const roleId = roleResult.insertId;

    // Get permission IDs from the database
    const permissionPlaceholders = permissions.map(() => '?').join(',');
    const [permissionRows] = await pool.execute(
      `SELECT id FROM permissions WHERE name IN (${permissionPlaceholders})`,
      permissions
    );

    if (permissionRows.length !== permissions.length) {
      return res.status(400).json({
        message: 'One or more permissions are invalid.',
      });
    }

    // Insert role-permission relationships
    const rolePermissions = permissionRows.map((row) => [roleId, row.id]);
    await pool.query(
      'INSERT INTO roles_permissions (role_id, permission_id) VALUES ?',
      [rolePermissions]
    );

    res.status(201).json({
      message: 'Role created successfully',
      role: { id: roleId, name, permissions },
    });
  } catch (err) {
    console.error('Error creating role:', err.message);
    res.status(500).json({ message: 'Error creating role' });
  }
};

