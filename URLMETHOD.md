# API Specification (v1)

### 🔐 Authentication

- **POST** `http://localhost:5002/v1/auth/signup` — `✅ Done`
- **POST** `http://localhost:5002/v1/auth/login` — `✅ Done`
- **POST** `http://localhost:5002/v1/auth/logout` — ``

---

### 👤 Users

- **GET** `http://localhost:5002/v1/user/filter?search=` — Search user by name — `✅ Done`
- **POST** `http://localhost:5002/v1/user` — Create new user — `✅ Done`
- **GET** `http://localhost:5002/v1/user` — Fetch all user with Pagination — `✅ Done`
- **GET** `http://localhost:5002/v1/user/{id}` — Fetch specific user details — `✅ Done`
- **DELETE** `http://localhost:5002/v1/users/{id}` — Remove User entry — `✅ Done`
- **PATCH** `http://localhost:5002/v1/user/{id}` — Update user information — `✅ Done`
- **PATCH** `http://localhost:5002/v1/users/{id}/change_role` — Change user role — `✅ Done`

---

### 👤 Profile

- **POST** `http://localhost:5002/v1/profile` — Create user profile `✅ Done`
- **GET** `http://localhost:5002/v1/profile` — Fetch all profiles — `✅ Done`
- **GET** `http://localhost:5002/v1/profile/{id}` — Fetch specific profile details — `✅ Done`
- **PATCH** `http://localhost:5002/v1/profile/{id}` — Update profile information — `✅ Done`

---

### 🎓 Education
- **POST** `http://localhost:5002/v1/uploads` — uploads degrees — `✅ Done`
- **DELETE** `http://localhost:5002/v1/remove_degrees/{id}` — Remove degrees — `✅ Done`

- **POST** `http://localhost:5002/v1/education` — Add education entry — `✅ Done`
- **GET** `http://localhost:5002/v1/education` — Fetch all education entries — `✅ Done`
- **GET** `http://localhost:5002/v1/education/{id}` — Fetch specific education entry — `✅ Done`
- **PATCH** `http://localhost:5002/v1/education/{id}` — Update education entry — `✅ Done`
- **DELETE** `http://localhost:5002/v1/education/{id}` — Remove education entry — `✅ Done`

---

### ⚡ Skills

- **POST** `http://localhost:5002/v1/skill` — Add new skill — ``
- **GET** `http://localhost:5002/v1/skill` — Fetch all skills — ``
- **GET** `http://localhost:5002/v1/skill/{id}` — Fetch specific skill details — ``
- **DELETE** `http://localhost:5002/v1/skill/{id}` — Remove skill record — ``

---

### 💼 Work Experience

- **POST** `http://localhost:5002/v1/work` — Add employment history — ``
- **GET** `http://localhost:5002/v1/work` — Fetch all employment history — ``
- **GET** `http://localhost:5002/v1/work/{id}` — Fetch specific employment details — ``
- **PUT** `http://localhost:5002/v1/work/{id}` — Update employment record — ``
- **DELETE** `http://localhost:5002/v1/work/{id}` — Remove employment record — ``

---

### 🚀 Key Features

- **POST** `http://localhost:5002/v1/feature` — Add product feature — ``
- **GET** `http://localhost:5002/v1/feature` — Fetch all product features — ``
- **GET** `http://localhost:5002/v1/feature/{id}` — Fetch specific feature details — ``
- **DELETE** `http://localhost:5002/v1/feature/{id}` — Remove product feature — ``

---

### 💻 Technology

- **POST** `http://localhost:5002/v1/technology` — Add core technology stack item — ``
- **GET** `http://localhost:5002/v1/technology` — Fetch all stack items — ``
- **GET** `http://localhost:5002/v1/technology/{id}` — Fetch specific technology details — ``
- **DELETE** `http://localhost:5002/v1/technology/{id}` — Remove technology stack item — ``

---

### 🛠️ Technology Tools

- **POST** `http://localhost:5002/v1/tool` — Add development tool — ``
- **GET** `http://localhost:5002/v1/tool` — Fetch all development tools — ``
- **GET** `http://localhost:5002/v1/tool/{id}` — Fetch specific tool details — ``
- **DELETE** `http://localhost:5002/v1/tool/{id}` — Remove development tool — ``

1. ចូរនិយាយប្រាប់ខ្ញុំអំពីខ្លួនអ្នក។
2. ហេតុអ្វីអ្នកចង់ធ្វើការនៅទីនេះ?
3. តើគោលដៅនៅពេលអនាគតរបស់អ្នកគឺជាអ្វី?
4. ហេតុអ្វីយើងគួរជ្រើសរើសយកអ្នក?
5. តើភាពខ្លាំងរបស់អ្នកគឺជាអ្វី?
6. តើភាពខ្សោយរបស់អ្នកគឺជាអ្វី?
7. តើ ៥ ឆ្នាំទៀតអ្នកចង់ក្លាយទៅជាអ្វី?
8. ហេតុអ្វីអ្នកចង់ចាកចេញពីក្រុមហ៊ុនរបស់អ្នក?
9. តើអ្នកចង់បានប្រាក់ខែប៉ុន្មាន?
10. តើអ្នកអាចចាប់ផ្ដើមការងារជាមួយយើងបាននៅពេលណា?
