CREATE TABLE permissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert example permissions
INSERT INTO permissions (name) VALUES 
('view_users'),
('edit_users'),
('delete_users'),
('manage_roles');
