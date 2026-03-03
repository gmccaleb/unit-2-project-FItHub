package com.example.FitHub.dto;

public class UserResponseDTO {

    private int id;
    private String firstName;
    private String email;
    private String username;

    public UserResponseDTO(int id, String firstName, String email, String username) {
        this.id = id;
        this.firstName = firstName;
        this.email = email;
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }
}