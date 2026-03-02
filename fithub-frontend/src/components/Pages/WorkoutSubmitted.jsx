import { Link, useLocation } from "react-router";

function WorkoutSubmitted() {
  const location = useLocation();
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
      
      <Link to="/Log-Workout">🡸 Log Another Workout</Link>
      <br />
      <Link to="/Workout-History">View Workout History 🡺</Link>
      <br />
    </main>
  );
}

export default WorkoutSubmitted;
