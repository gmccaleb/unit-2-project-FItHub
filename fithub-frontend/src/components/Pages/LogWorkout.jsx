import { useState } from "react";
import Button from "../reusable/Button";
import { useNavigate } from "react-router";

function LogWorkout({ workoutHistory, setWorkoutHistory }) {
  const navigate = useNavigate();
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [exercises, setExercises] = useState([
    { name: "", sets: "", reps: "", weight: "" },
  ]);

  // Add new empty fields for exercises
  const addExerciseField = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", weight: "" }]);
  };

  // Updates individual exercise fields
  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = exercises.map(
      (exercise, i) =>
        i === index ? { ...exercise, [field]: value } : exercise // keeps the same if it wasn't updated
    );
    setExercises(updatedExercises);
  };

  // Submits workout and adds it to history
  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = {
      title: workoutTitle,
      date: new Date().toLocaleDateString(), // stores current date
      exercises,
    };

    // Adds it to the state that is passed from App.jsx
    setWorkoutHistory([newWorkout, ...workoutHistory]);

    // Resets form for next logged workout
    setWorkoutTitle("");
    setExercises([{ name: "", sets: "", reps: "", weight: "" }]);

    navigate("/Workout-Submitted", {
      state: { workoutTitle: newWorkout.title },
    });
  };

  return (
    <main className="log-workout">
      <h2>Log a Workout</h2>

      <form onSubmit={handleSubmit}>
        <label className="workout-title">
          <h4>Workout Title:</h4>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={workoutTitle}
            onChange={(e) => setWorkoutTitle(e.target.value)}
            required
          />
        </label>

        <h4>Exercises:</h4>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-inputs">
            <input
              type="text"
              name="exercise-name"
              placeholder="Exercise Name"
              value={exercise.name}
              onChange={(e) =>
                handleExerciseChange(index, "name", e.target.value)
              }
              required
            />
            <input
              type="number"
              name="sets"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) =>
                handleExerciseChange(index, "sets", e.target.value)
              }
              min={0}
              onKeyDown={(event) => {
                if (event.key === "e" || event.key === "E") {
                  {
                    /* prevents e from being entered */
                  }
                  event.preventDefault();
                }
              }}
            />
            <input
              type="number"
              name="reps"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) =>
                handleExerciseChange(index, "reps", e.target.value)
              }
              min={0}
              onKeyDown={(event) => {
                if (event.key === "e" || event.key === "E") {
                  event.preventDefault();
                }
              }}
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (lbs)"
              value={exercise.weight}
              onChange={(e) =>
                handleExerciseChange(index, "weight", e.target.value)
              }
              min={0}
              onKeyDown={(event) => {
                if (event.key === "e" || event.key === "E") {
                  event.preventDefault();
                }
              }}
            />
          </div>
        ))}

        <Button
          type="button"
          className="add-exercise"
          text="Add Exercise"
          onClick={addExerciseField}
        />
        <Button type="submit" className="submit" text="Submit" />
      </form>
    </main>
  );
}

export default LogWorkout;
