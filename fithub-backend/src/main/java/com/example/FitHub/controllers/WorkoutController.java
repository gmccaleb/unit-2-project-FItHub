package com.example.FitHub.controllers;

import com.example.FitHub.dto.WorkoutDTO;
import com.example.FitHub.models.Workout;
import com.example.FitHub.services.WorkoutService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class WorkoutController {
    private final WorkoutService workoutService;

    public WorkoutController(WorkoutService workoutService){
        this.workoutService = workoutService;
    }

    // Endpoint to get a user's workout history
    @GetMapping("/{username}/workout-history")
    public ResponseEntity<?> getUserWorkouts(@PathVariable String username){

        List<Workout> workouts = workoutService.getWorkoutsByUsername(username);

        return ResponseEntity.ok(workouts);
    }

    // Endpoint to log a new workout for a user
    @PostMapping("/{username}/log-workout")
    public ResponseEntity<?> createWorkout(@PathVariable String username, @Valid @RequestBody WorkoutDTO workoutDTO){

        workoutDTO.setUsername(username);

        Workout workout = workoutService.createWorkout(workoutDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(workout);
    }

    // Endpoint to delete a workout from a user's history
    @DeleteMapping("/{username}/workout-history/{workoutId}")
    public ResponseEntity<?> deleteWorkout(@PathVariable String username, @PathVariable int workoutId){
        workoutService.deleteWorkout(username, workoutId);

        return ResponseEntity.ok("Workout deleted successfully");
    }

    @PutMapping("/{username}/workout-history/{workoutId}")
    public ResponseEntity<?> updateWorkout(@PathVariable String username, @PathVariable int workoutId, @Valid @RequestBody WorkoutDTO workoutDTO){

        workoutDTO.setUsername(username);

        Workout updatedWorkout = workoutService.updateWorkout(workoutId, workoutDTO);

        return ResponseEntity.ok(updatedWorkout);
    }
}
