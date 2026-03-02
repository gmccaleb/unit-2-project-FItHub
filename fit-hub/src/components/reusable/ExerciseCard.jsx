import { useState } from "react";

function ExerciseCard({ exercise }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card" onClick={toggleOpen}>
      <img src={exercise.image} alt={`Picture of ${exercise.name}`} />
      <h3>{exercise.name}</h3>

      {isOpen && (
        <div className="details">
          <p>
            <strong>Muscle Groups:</strong> {exercise.muscleGroups.join(", ")}
          </p>
          <p>
            <strong>Instructions:</strong> {exercise.instructions}
          </p>
        </div>
      )}
    </div>
  );
}

export default ExerciseCard;
