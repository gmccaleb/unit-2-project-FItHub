import { Link, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

function WorkoutSubmitted() {
  const location = useLocation();
  const { user } = useAuth();
  const workoutTitle = location.state?.workoutTitle || "";

  return (
    <main className="workout-submitted">
      <h2>Workout Logged!</h2>
      {workoutTitle && (
        <p>
          You successfully logged: <strong>{workoutTitle}</strong>
        </p>
      )}
      <p>Great job! Your workout has been added to your history.</p>
      
      <Link to={`/${user.username}/log-workout`}>🡸 Log Another Workout</Link>
      <br />
      <Link to={`/${user.username}/workout-history`}>View Workout History 🡺</Link>
      <br />
    </main>
  );
}

export default WorkoutSubmitted;
