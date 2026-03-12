
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";



function Home() {

  const { user }= useAuth();
  return (
    <main className="home">
      <h1>Welcome to FitHub!</h1>

      <div className="intro-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6L0d32Jouz9j74dYxOoMBLGaPcRRuJF57HQ&s"
          alt="Workout illustration"
          className="home-image"
        />
        <p>
          FitHub is your all-in-one workout assistant — view our vast exercise
          library, log your workouts, and monitor your progress over time.
          Whether you’re just starting out or pushing for new goals, FitHub
          helps you stay organized, motivated, and consistent on your fitness
          journey.
        </p>
      </div>

     <section className="home-motivation">
        <h2>Why Choose FitHub?</h2>
        <ul>
          <li> Keep all your workouts organized in one place</li>
          <li> Track your progress and reach your fitness goals faster</li>
          <li> Explore a variety of exercises with instructions </li>
        </ul>
      </section>

      { !user && (
        <section className="home-cta">
          <p>
            Ready to start your fitness journey?{" "}
            <Link to="/register" className="btn-link">
              Create Your Account
            </Link>
          </p>
        </section>
      )}
    </main>
  );
}

export default Home;
