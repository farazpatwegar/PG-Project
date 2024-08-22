package com.app.showbooking.dto;

import com.app.showbooking.entities.Role;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequestDto {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Role role;
    private String contactNumber;
    private String address;
    
	public RegisterRequestDto(String firstName, String lastName, String email, String password, Role role,
			String contactNumber, String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.contactNumber = contactNumber;
		this.address = address;
	}

    
}