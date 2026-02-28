package com.example.FitHub.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.List;


public class WorkoutDTO {
    @NotBlank(message = "Workout title is required.")
    private String title;

    @NotNull(message = "Workout date is required.")
    private LocalDate date;

    @NotNull(message = "Exercise list cannot be null.")
    @Size(min = 1, message = "At least one exercise is required.")
    private List<ExerciseDTO> exercises;

    private String username;

    public WorkoutDTO() {
    }
    public WorkoutDTO(String title, LocalDate date, List<ExerciseDTO> exercises) {
        this.title = title;
        this.date = date;
        this.exercises = exercises;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public List<ExerciseDTO> getExercises() {
        return exercises;
    }

    public void setExercises(List<ExerciseDTO> exercises) {
        this.exercises = exercises;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
