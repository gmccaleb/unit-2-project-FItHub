package com.example.FitHub.services;

import com.example.FitHub.dto.WorkoutDTO;
import com.example.FitHub.models.Exercise;
import com.example.FitHub.models.User;
import com.example.FitHub.models.Workout;
import com.example.FitHub.repositories.UserRepository;
import com.example.FitHub.repositories.WorkoutRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkoutService {

    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;

    public WorkoutService(WorkoutRepository workoutRepository, UserRepository userRepository){
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
    }

    public Workout createWorkout(WorkoutDTO workoutDTO){

        // Added null safety check to prevent NullPointerException
        // Ensures exercises list exists before streaming
        if(workoutDTO.getExercises() == null || workoutDTO.getExercises().isEmpty()){
            throw new RuntimeException("At least one exercise is required.");
        }

        // Find user by username
        User user = userRepository.findByUsername(workoutDTO.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Create Workout using DTO data
        Workout workout = new Workout(user, workoutDTO.getTitle(), workoutDTO.getDate()
        );

        // Map ExerciseDTO list to Exercise entity list using stream mapping instead of for loop
        List<Exercise> exercises = workoutDTO.getExercises().stream()
                .map(e -> new Exercise(
                        e.getExerciseName(),
                        e.getSets() == null ? 0 : e.getSets(),
                        e.getReps() == null ? 0 : e.getReps(),
                        e.getWeight() == null ? 0 : e.getWeight(),
                        workout
                ))
                .toList();

        // Adds mapped exercises to the workout's exercise list
        workout.getExercises().addAll(exercises);

        // Save workout (cascade will also save exercises)
        return workoutRepository.save(workout);
    }

    public List<Workout> getWorkoutsByUsername(String username){

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return workoutRepository.findByUser(user);
    }

    public void deleteWorkout(String username, int workoutId){

        Workout workout = workoutRepository.findById(workoutId)
                .orElseThrow(() -> new RuntimeException("Workout not found"));

        // Security check, makes sure workout belongs to user
        if(!workout.getUser().getUsername().equals(username)){
            throw new RuntimeException("Unauthorized deletion attempt");
        }

        workoutRepository.delete(workout);
    }

    public Workout updateWorkout(int id, WorkoutDTO workoutDTO) {

        Workout workout = workoutRepository.findById(id).orElseThrow(() -> new RuntimeException("Workout not found"));

        workout.setTitle(workoutDTO.getTitle());
        workout.setDate(workoutDTO.getDate());

        // Clear managed collection only
        workout.getExercises().clear();

        // Rebuild exercises list
        workoutDTO.getExercises().forEach(e -> {
            Exercise exercise = new Exercise(
                    e.getExerciseName(),
                    e.getSets() == null ? 0 : e.getSets(),
                    e.getReps() == null ? 0 : e.getReps(),
                    e.getWeight() == null ? 0 : e.getWeight(),
                    workout
            );

            workout.getExercises().add(exercise);
        });

        return workoutRepository.save(workout);
    }
}
