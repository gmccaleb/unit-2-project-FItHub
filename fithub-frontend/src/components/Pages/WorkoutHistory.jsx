import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../reusable/Button";

function WorkoutHistory() {
  const { user } = useAuth();
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/${user.username}/workout-history`
      );

      if (!res.ok) throw new Error("Failed to fetch workout history");

      const data = await res.json();
      setWorkoutHistory(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching workout history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user?.username) return;
    fetchHistory();
  }, [user?.username]);

  const handleDeleteWorkout = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:8080/${user.username}/workout-history/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete workout");

      // re-fetch updated workout history
      fetchHistory();
    } catch (error) {
      console.error(error);
      alert("Error deleting workout");
    }
  };


  if (loading) return <p>Loading workout history...</p>;

  return (
    <main className="workout-history">
      <h2>Workout History</h2>

      <section>
        {workoutHistory.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Exercises</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {workoutHistory.map((workout) => (
                <tr key={workout.id}>
                  <td>{workout.title}</td>

                  <td>
                    {workout.date || new Date().toLocaleDateString()}
                  </td>

                  <td>
                    <ul>
                      {(workout.exercises || []).map((exercise, i) => {
                        const details = [];

                        if (exercise.sets > 0)
                          details.push(`${exercise.sets} sets`);

                        if (exercise.reps > 0)
                          details.push(`${exercise.reps} reps`);

                        return (
                          <li key={i}>
                            {exercise.name || exercise.exerciseName}
                            {details.length > 0 &&
                              ` — ${details.join(" × ")}`}
                            {exercise.weight > 0 &&
                              ` — ${exercise.weight} lbs`}
                          </li>
                        );
                      })}
                    </ul>
                  </td>

                  <td>
                    <Button type="button" text="🗑️" onClick={() => handleDeleteWorkout(workout.id)} className="delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}

export default WorkoutHistory;