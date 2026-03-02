import { Link } from "react-router";

function Home() {
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

      <section>
        <Link to="/Exercise-Library" className="btn-link">
          View Exercise Library
        </Link>
        <br />
        <Link to="/Log-Workout" className="btn-link">
          Log Workouts
        </Link>
        <br />
        <Link to="/Workout-History" className="btn-link">
          View Workout History
        </Link>
      </section>
    </main>
  );
}

export default Home;
