import { useState } from "react";
import Button from "../reusable/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function LogWorkout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDate, setWorkoutDate] = useState("");
  const [exercises, setExercises] = useState([
    { exerciseName: "", sets: "", reps: "", weight: "" },
  ]);

  // Removes an exercise input row by index, but ensures at least one row remains
    const removeExerciseField = (index) => {
    if (exercises.length === 1) return; // keep at least one exercise row
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const addExerciseField = () => {
    setExercises([...exercises, { exerciseName: "", sets: "", reps: "", weight: "" }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updated = exercises.map((exercise, i) =>
      i === index ? { ...exercise, [field]: value } : exercise,
    );
    setExercises(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.username) {
      alert("User not authenticated");
      return;
    }

    const workoutData = {
      title: workoutTitle,
      date: workoutDate || new Date().toISOString(),
      exercises,
    };

    // Send workout data to backend API and handle response
    try {
      const response = await fetch(
        `http://localhost:8080/${user.username}/log-workout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(workoutData),
        },
      );

      if (!response.ok) throw new Error("Workout submission failed");

      const savedWorkout = await response.json();

      // Reset form
      setWorkoutTitle("");
      setWorkoutDate("");
      setExercises([{ exerciseName: "", sets: "", reps: "", weight: "" }]);

      navigate(`/${user.username}/workout-submitted`, {
        state: { workoutTitle: savedWorkout.title },
      });
    } catch (error) {
      console.error(error);
      alert("Error logging workout. Please try again.");
    }
  };

  return (
    <main className="log-workout">
      <h2>Log a Workout</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h4>Workout Title:</h4>
            <input
              type="text"
              placeholder="Title"
              value={workoutTitle}
              onChange={(e) => setWorkoutTitle(e.target.value)}
              required
            />
          </label>

          <label>
            <h4>Workout Date:</h4>
            <input
              type="date"
              value={workoutDate}
              onChange={(e) => setWorkoutDate(e.target.value)}
            />
          </label>
        </div>

        <h4>Exercises:</h4>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-inputs">
            <input
              type="text"
              placeholder="Exercise Name"
              value={exercise.exerciseName}
              onChange={(e) =>
                handleExerciseChange(index, "exerciseName", e.target.value)
              }
              required
            />
            <input
              type="number"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) =>
                handleExerciseChange(index, "sets", e.target.value)
              }
              min={0}
               onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="number"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) =>
                handleExerciseChange(index, "reps", e.target.value)
              }
              min={0}
               onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="number"
              placeholder="Weight (lbs)"
              value={exercise.weight}
              onChange={(e) =>
                handleExerciseChange(index, "weight", e.target.value)
              }
              min={0}
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
            />
             <Button
              type="button"
              text="Delete"
              className="delete-exercise"
              onClick={() => removeExerciseField(index)}
            />
          </div>
        ))}

        <Button
          type="button"
          text="+ Add Exercise"
          onClick={addExerciseField}
          className="add-exercise"
        />
        <Button
          type="submit"
          text="Submit Workout"
          onClick={handleSubmit}
          className="submit"
        />
      </form>
    </main>
  );
}

export default LogWorkout;
