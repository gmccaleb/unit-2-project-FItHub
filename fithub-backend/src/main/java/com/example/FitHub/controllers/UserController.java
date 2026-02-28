package com.example.FitHub.controllers;

import com.example.FitHub.dto.LoginDTO;
import com.example.FitHub.dto.UserDTO;
import com.example.FitHub.models.User;
import com.example.FitHub.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserDTO userDTO) {
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use.");
        }
        if (userRepository.existsByUsername(userDTO.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already in use.");
        }
        User user = new User(userDTO.getFirstName(), userDTO.getEmail(), userDTO.getUsername(), userDTO.getPassword());
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginDTO loginDTO){

        if(!userRepository.existsByUsername(loginDTO.getUsername())){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Username not found");
        }

        User user = userRepository.findByUsername(loginDTO.getUsername())
                .orElse(null);

        if(user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }

        // Fake password check (since this is mock login)
        if(!user.getPassword().equals(loginDTO.getPassword())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Incorrect password");
        }

        return ResponseEntity.ok("Login successful");
    }

}
