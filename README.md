# 💪 FitHub

## 🚀 Overview
FitHub is a full-stack workout-tracking web application that enables users to log, manage, and review their fitness routines through a user-friendly and responsive interface. In addition to tracking workouts, users can browse an exercise library to discover new exercises to include in their routines. The application supports full **CRUD functionality**, allowing users to create, retrieve, update, and delete workout data through validated forms and asynchronous HTTP requests. With a component-based architecture, conditional rendering, and seamless frontend-backend integration, FitHub delivers a structured and interactive user experience.

This project was built to demonstrate modern full-stack development practices by combining:

- A **React frontend** using functional components, hooks, React Router, and dynamic state management  
- A **Java Spring Boot backend** with ORM, JPA repositories, and RESTful API endpoints  



---

## 🛠️ Technologies Used

### Frontend
- React
- JavaScript
- Vite
- React Router
- CSS
- Google Fonts
- Prettier

### Backend
- Java
- Spring Boot
- Maven
- MySQL
- Hibernate (JPA)
- Spring Security

---

## ⚙️ Installation & Setup

> **Note:** To run this project locally, you will need the following installed:
- Node.js (LTS version)
- npm or yarn
- Java Development Kit (JDK 21)
- MySQL Server (8.0+)

---

### 🔧 Back End Setup (Java / Spring Boot / MySQL)

1. **Clone the repository**
   ```bash
   git clone https://github.com/gmccaleb/unit-2-project-FItHub
   cd unit-2-project-FItHub
   ```

2. **Set up MySQL database**
   - Create a new database (example: `fithub`)
   - Update your `application.properties` file:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/fithub
   spring.datasource.username=YOUR_USERNAME
   spring.datasource.password=YOUR_PASSWORD

   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Run the backend**
   - Open the backend project in IntelliJ
   - Run the Spring Boot application
4. **Run the Java/Spring Boot application**
   - If you do not have the application loaded in an IDE such as IntelliJ, go to the terminal and navigate to the root directory of the backend project. Then execute the following command to build and run the application (Hibernate will automatically create the tables):
   ```bash
   mvn spring-boot:run
   ```
   ✅ The API should now be running on http://localhost:8080
---

### 💻 Front End Setup (React / Vite)

1. Navigate to the frontend folder:
   ```bash
   cd fithub-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:5173
   ```

---

## 🧩 Features

- ✅ User authentication (register & login)
- 🏋️ Create, edit, and delete workouts
- 📋 View workout history
- 📚 Browse exercise library
- 🔄 Full CRUD operations with backend integration
- ⚡ Dynamic UI with React state and routing

---

## 🖼️ Wireframes
[Moqups Wireframe](https://app.moqups.com/wtwUOHOPj3De1OHMeqI4smxaO1PVrj8n/view/page/ab652dc1c)

---

## 🗄️ ER Diagram
This project utilizes a MySQL database structured around 3 entities with the following relationships:
1. 👤 Users (1 → *) Workouts: One-to-Many
2. 💪 Workouts (1 → *) Exercises: One-to-Many

[Entity Relationship Diagram](https://dbdiagram.io/d/Fithub-Diagram-698e79eabd82f5fce296caa9)

---

## ⚠️ Unsolved Problems / Future Features

### Current Limitations
- Mock authentication (no real security or hashing)
- No advanced filtering or sorting for workout history

### Future Improvements
- Add Spring Security
- Implement search and filtering for workouts
- Improve form validation and user feedback
- Deploy application (AWS, Vercel, or Heroku)

---

## 📌 Notes
This project was developed as part of coursework to practice full-stack development, including frontend frameworks, backend architecture, database integration, and RESTful API design.
