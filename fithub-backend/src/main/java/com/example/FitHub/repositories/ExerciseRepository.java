package com.example.FitHub.repositories;

import com.example.FitHub.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository <Exercise, Integer> {
}
