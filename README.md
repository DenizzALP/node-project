
# Node Project
## Description
This is a comprehensive backend application built with Node.js, Express.js, and MongoDB. The project includes user authentication, role-based authorization, file upload/download, and secure data handling.Users with the appropriate permissions can upload Excel files, which are then parsed and saved into the database in a structured format.

## Features
✅ CRUD operations via RESTful endpoints

🔐 JWT-based user authentication and authorization

🧑‍💼 Role management with admin permissions

📂 Excel file upload & parsing into MongoDB

📥 File download endpoint

🛡️ Security handled with npm audit fixes and middleware

📝 Logging system for requests and errors

📊 Data validation and sanitization

## Technologies Used
Node.js

Express.js

MongoDB & Mongoose

JWT (jsonwebtoken)

Multer (for file upload)

XLSX (for Excel parsing)

dotenv

morgan or winston (for logging)

express-validator

bcrypt (for password hashing)

🚀 Getting Started

git clone https://github.com/DenizzALP/node-project.git
cd node-project
npm install
npm start

Create a .env file with the following:

CONNECTION_STRING=
LOG_LEVEL=debug
## API Endpoints Overview

📁 API Endpoints Overview

| Method | Endpoint                             | Description                | Auth Required | Permissions              |
|--------|--------------------------------------|----------------------------|----------------|---------------------------|
| POST   | /api/auditlogs/                      | Add audit log              | ✅              | auditlogs_view            |
| GET    | /api/categories/                     | Get categories             | ✅              | category_view             |
| POST   | /api/categories/add                  | Add category               | ✅              | category_add              |
| POST   | /api/categories/update               | Update category            | ✅              | category_update           |
| POST   | /api/categories/delete               | Delete category            | ✅              | category_delete           |
| POST   | /api/categories/export               | Export categories          | ✅              | category_export           |
| POST   | /api/categories/import               | Import categories          | ✅              | category_import           |
| GET    | /api/events/                         | Get events                 | ✅              | —                         |
| GET    | /api/roles/                          | Get roles                  | ✅              | role_view                 |
| POST   | /api/roles/add                       | Add role                   | ✅              | role_add                  |
| POST   | /api/roles/update                    | Update role                | ✅              | role_update               |
| POST   | /api/roles/delete                    | Delete role                | ✅              | role_delete               |
| GET    | /api/roles/role_privileges           | Get role privileges        | ✅              | role_view                 |
| POST   | /api/stats/auditlogs                 | Audit log stats            | ✅              | auditlogs_view            |
| POST   | /api/stats/categories/unique         | Unique category stats      | ✅              | category_view             |
| POST   | /api/stats/users/count               | User count stats           | ✅              | user_view                 |
| POST   | /api/users/register                  | Register new user          | ❌              | —                         |
| POST   | /api/users/auth                      | User login                 | ❌              | —                         |
| GET    | /api/users/                          | Get user info              | ✅              | user_view                 |
| POST   | /api/users/add                       | Add user                   | ✅              | user_add                  |
| POST   | /api/users/update                    | Update user                | ✅              | user_update               |
| POST   | /api/users/delete                    | Delete user                | ✅              | user_delete               |


📚 Excel Upload Feature
Users with the appropriate permissions (e.g., category_import) can upload an Excel file (.xlsx). The server parses the file using the xlsx library and saves the data into MongoDB collections. This feature enables fast bulk imports and simplifies data entry.



🛡️ Security
All endpoints are protected with JWT tokens

Admin-only access is enforced for sensitive routes

Input is validated and sanitized

npm audit used to detect and fix known vulnerabilities


📝 Logging
Request logs and error logs are handled using morgan (or winston)

Logs are stored in logs/ folder (optional setup)

## 📃 License
[MIT](LICENSE)




