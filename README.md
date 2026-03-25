# 💪 FitHub

## 🚀 Overview
FitHub is a full-stack workout-tracking web application that enables users to log, manage, and review their fitness routines through an intuitive and responsive interface.

In addition to tracking workouts, users can browse an exercise library to discover new exercises to include in their routines. This project was built to demonstrate modern full-stack development practices by combining:

- A **React frontend** using functional components, hooks, React Router, and dynamic state management  
- A **Java Spring Boot backend** with ORM, JPA repositories, and RESTful API endpoints  

The application supports full **CRUD functionality**, allowing users to create, retrieve, update, and delete workout data through validated forms and asynchronous HTTP requests.

With a component-based architecture, conditional rendering, and seamless frontend-backend integration, FitHub showcases the ability to build a structured, interactive, and data-driven web application from end to end.

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
   - Create a new database (example: `fithub_db`)
   - Update your `application.properties` file:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/fithub_db
   spring.datasource.username=YOUR_USERNAME
   spring.datasource.password=YOUR_PASSWORD

   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```

3. **Run the backend**
   - Open the backend project in IntelliJ
   - Run the Spring Boot application

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
- Add progress charts and analytics dashboard
- Enhance UI/UX with animations and accessibility improvements
- Deploy application (AWS, Vercel, or Heroku)

---

## 📌 Notes
This project was developed as part of coursework to practice full-stack development, including frontend frameworks, backend architecture, database integration, and RESTful API design.
