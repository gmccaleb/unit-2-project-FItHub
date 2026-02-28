package com.example.FitHub.repositories;

import com.example.FitHub.models.User;
import com.example.FitHub.models.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkoutRepository extends JpaRepository <Workout, Integer> {
    List<Workout> findByUser(User user);
}
