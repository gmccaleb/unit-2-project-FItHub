import "./App.css";
import { Routes, Route } from "react-router";

import Home from "./components/Pages/Home";
import ExerciseLibrary from "./components/Pages/ExerciseLibrary";
import LogWorkout from "./components/Pages/LogWorkout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/Pages/About";
import WorkoutSubmitted from "./components/Pages/WorkoutSubmitted";
import WorkoutHistory from "./components/Pages/WorkOutHistory";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import { useAuth } from "./components/context/AuthContext";
import EditWorkout from "./components/Pages/EditWorkout";

function App() {
  const { user } = useAuth();

  return (
    <div className="app-container">
      <Header />

      <div className="app-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercise-library" element={<ExerciseLibrary />} />

          {/* Auth Routes */}
          {!user && (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}

          {/* Protected Routes */}
          {user && (
            <>
              <Route path="/:username/log-workout" element={<LogWorkout />} />

              <Route
                path="/:username/workout-history"
                element={<WorkoutHistory />}
              />
            </>
          )}

          <Route
            path="/:username/workout-submitted"
            element={<WorkoutSubmitted />}
          />
          {/* <Route
            path="/:username/workout-history/:workoutId/edit"
            element={<EditWorkout />}
          /> */}
          <Route
  path="/:username/edit-workout/:workoutId"
  element={<EditWorkout />}
/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
