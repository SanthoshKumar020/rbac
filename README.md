# **Role-Based Access Control (RBAC) System**

## **Overview**
This is a secure and flexible Role-Based Access Control (RBAC) system implemented using **Node.js**, **Express.js**, and **MySQL**. It features user authentication, role management, and authorization, ensuring that users can only access resources permitted for their roles.

---

## **Features**
- **User Authentication**:
  - User registration, login, and logout using secure password hashing (bcrypt) and JWT.
- **Role-Based Access Control**:
  - Assign roles (e.g., Admin, User, Moderator) to users.
  - Define permissions (e.g., `view_users`, `edit_users`) and associate them with roles.
- **Authorization**:
  - Protect API endpoints with middleware ensuring only users with the correct permissions can access them.
- **Error Handling**:
  - Centralized error handling with logging using `winston`.
- **Database Integration**:
  - MySQL database with tables for users, roles, permissions, and their relationships.
- **Logging**:
  - Log all application errors and requests to log files for monitoring.

---

## **Technologies Used**
- **Backend Framework**: Node.js with Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Logging**: winston
- **Environment Variables**: dotenv

---

## **File Structure**
```
/rbac-app
├── /config
│   ├── db.js                # Database connection
│   ├── jwt.js               # JWT configuration
│   ├── logger.js            # Winston logger setup
├── /controllers
│   ├── authController.js    # Handles authentication logic
│   ├── userController.js    # Handles user management logic
│   ├── roleController.js    # Handles role and permission management logic
├── /middlewares
│   ├── authMiddleware.js    # Authentication and JWT validation middleware
│   ├── roleMiddleware.js    # Role and permission-based access control
│   ├── errorHandler.js      # Centralized error handling middleware
├── /models
│   ├── userModel.sql        # SQL schema for users
│   ├── roleModel.sql        # SQL schema for roles
│   ├── permissionModel.sql  # SQL schema for permissions
├── /routes
│   ├── authRoutes.js        # Routes for authentication
│   ├── userRoutes.js        # Routes for user management
│   ├── roleRoutes.js        # Routes for role and permission management
├── /logs
│   ├── app.log              # Application log file
│   ├── error.log            # Error log file
├── /utils
│   ├── hashPassword.js      # Helper to hash passwords
│   ├── generateToken.js     # Helper to generate JWT tokens
├── app.js                   # Main application entry point
├── package.json             # Project metadata and dependencies
└── .env                     # Environment variables
```

---

## **Setup and Installation**

### **Prerequisites**
- Node.js (v16 or higher)
- MySQL database
- npm or yarn package manager

### **Steps**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rbac-app.git
   cd rbac-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=rbac_db
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Set up the database**:
   - Create a MySQL database:
     ```sql
     CREATE DATABASE rbac_db;
     ```
   - Import the schema files from the `/models` directory:
     ```bash
     mysql -u root -p rbac_db < models/userModel.sql
     mysql -u root -p rbac_db < models/roleModel.sql
     mysql -u root -p rbac_db < models/permissionModel.sql
     ```

5. **Run the application**:
   ```bash
   npm start
   ```

6. **Test the application**:
   Use Postman or any other API testing tool to test the endpoints.

---

## **API Endpoints**

### **Authentication**
| Method | Endpoint             | Description            |
|--------|-----------------------|------------------------|
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Log in a user          |

### **User Management**
| Method | Endpoint          | Description                |
|--------|--------------------|----------------------------|
| GET    | `/api/users`      | Get all users (Admin only) |
| DELETE | `/api/users/:id`  | Delete a user (Admin only) |

### **Role Management**
| Method | Endpoint              | Description                        |
|--------|------------------------|------------------------------------|
| POST   | `/api/roles/create`   | Create a new role (Admin only)     |
| GET    | `/api/roles`          | Get all roles (Admin only)         |

---

## **Error Handling**
- Errors are logged in the `/logs/error.log` file.
- Application logs are stored in `/logs/app.log`.

---

## **Future Improvements**
- Add user interface for easier role and permission management.
- Implement a caching mechanism for frequently accessed permissions.
- Add unit and integration tests.

---

## **License**
This project is licensed under the MIT License.

---