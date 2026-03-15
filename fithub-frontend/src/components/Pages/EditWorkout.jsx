import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "../reusable/Button";
import TrashButton from "../reusable/TrashButton";

function EditWorkout() {
  const { username } = useParams();
  const { workoutId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [workout, setWorkout] = useState({
    title: "",
    date: "",
    exercises: [{ exerciseName: "", sets: "", reps: "", weight: "" }],
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Fetch the workout from backend
  useEffect(() => {
    if (!username || !workoutId) return;

    const fetchWorkout = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/${user.username}/workout-history/${workoutId}`,
        );

        if (!res.ok) throw new Error("Failed to fetch workout");

        const data = await res.json();

        if (!data.exercises || data.exercises.length === 0) {
          data.exercises = [
            { exerciseName: "", sets: "", reps: "", weight: "" },
          ];
        }

        setWorkout(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [username, workoutId]);

  if (loading) return <p>Loading workout...</p>;

  // Handle input change for workout fields
  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prev) => ({ ...prev, [name]: value }));
  };

  // Handle exercise field changes
  const handleExerciseChange = (index, e) => {
    const { name, value } = e.target;
    const newExercises = [...workout.exercises];
    newExercises[index][name] = value;
    setWorkout((prev) => ({ ...prev, exercises: newExercises }));
  };

  const addExercise = () => {
    setWorkout((prev) => ({
      ...prev,
      exercises: [
        ...prev.exercises,
        { exerciseame: "", sets: "", reps: "", weight: "" },
      ],
    }));
  };

  const removeExercise = (index) => {
    if (workout.exercises.length === 1) return;
    const newExercises = [...workout.exercises];
    newExercises.splice(index, 1);
    setWorkout((prev) => ({ ...prev, exercises: newExercises }));
  };

  // Submit updated workout
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:8080/${user.username}/workout-history/${workoutId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workout),
        },
      );

      if (!res.ok) throw new Error("Failed to update workout");
      setMessage("✅ Workout updated successfully!");
      setMessageType("success");

      // Redirect back to workout history after a short delay
      setTimeout(() => {
        setMessage("");
        navigate(`/${username}/workout-history`);
      }, 2000);
    } catch (error) {
      setMessage("❌ Error updating workout");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <main className="edit-workout">
      <h2>Edit Workout</h2>
      {message && <div className={`message ${messageType}`}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Workout Title:
          <input
            type="text"
            name="title"
            value={workout.title}
            onChange={handleWorkoutChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={workout.date.split("T")[0] || ""}
            onChange={handleWorkoutChange}
            required
          />
        </label>

        <h3>Exercises</h3>
        {workout.exercises.map((exercise, index) => (
          <div key={index} className="exercise-row">
            <input
              type="text"
              name="exerciseName"
              placeholder="Exercise name"
              value={exercise.exerciseName}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
            <input
              type="number"
              name="sets"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, e)}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="number"
              name="reps"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) => handleExerciseChange(index, e)}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (lbs)"
              value={exercise.weight}
              onChange={(e) => handleExerciseChange(index, e)}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E") {
                  e.preventDefault();
                }
              }}
            />
            {workout.exercises.length > 0 && (
              <TrashButton onClick={() => removeExercise(index)} />
            )}
          </div>
        ))}

        <Button
          type="button"
          text="+ Add Exercise"
          onClick={addExercise}
          className="add-exercise"
        />

        <Button
          type="submit"
          text="Update Workout"
          onClick={handleSubmit}
          className="submit"
        />
      </form>
    </main>
  );
}

export default EditWorkout;
