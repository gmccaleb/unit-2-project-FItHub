package com.example.FitHub.dto;

import jakarta.validation.constraints.NotBlank;

public class ExerciseDTO {
    @NotBlank(message = "Exercise name is required.")
    private String exerciseName;

    private Integer sets;
    private Integer reps;
    private Integer weight;

    public ExerciseDTO() {
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public Integer getSets() {
        return sets;
    }

    public void setSets(Integer sets) {
        this.sets = sets;
    }

    public Integer getReps() {
        return reps;
    }

    public void setReps(Integer reps) {
        this.reps = reps;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }
}
