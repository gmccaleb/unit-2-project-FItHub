package com.example.FitHub.repositories;

import com.example.FitHub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Integer> {
}
