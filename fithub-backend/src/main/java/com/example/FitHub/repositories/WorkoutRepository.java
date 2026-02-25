package com.example.FitHub.repositories;

import com.example.FitHub.models.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository <Workout, Integer> {
}
