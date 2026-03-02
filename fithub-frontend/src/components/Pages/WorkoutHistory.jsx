import Button from "../reusable/Button";

function WorkoutHistory({ workoutHistory, setWorkoutHistory }) {
  // Handler to reset history
  const handleReset = () => {
    localStorage.removeItem("workoutHistory"); // clear localStorage
    setWorkoutHistory([]); // reset state so UI updates
  };

  return (
    <main className="workout-history">
      <h2>Workout History</h2>

      {/* Reset button */}
      <Button
        text="Reset Workout History"
        onClick={handleReset}
        className="reset-history"
      />

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
              </tr>
            </thead>
            <tbody>
              {workoutHistory.map((workout, index) => (
                <tr key={index}>
                  <td>{workout.title}</td>
                  <td>{workout.date || new Date().toLocaleDateString()}</td>
                  <td>
                    <ul>
                      {(workout.exercises || []).map((exercise, i) => {
                        const details = [];
                        if (exercise.sets)
                          details.push(`${exercise.sets} sets`);
                        if (exercise.reps)
                          details.push(`${exercise.reps} reps`);

                        return (
                          <li key={i}>
                            {exercise.name}
                            {details.length > 0 && ` — ${details.join(" × ")}`}
                            {exercise.weight && ` — ${exercise.weight} lbs`}
                          </li>
                        );
                      })}
                    </ul>
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
