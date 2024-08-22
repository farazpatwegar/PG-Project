package com.app.showbooking.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequestDto {
    private String email;
    private String password;
    
	public LoginRequestDto(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

    // Getters and Setters
}