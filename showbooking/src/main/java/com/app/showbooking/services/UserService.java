package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.dto.LoginRequestDto;
import com.app.showbooking.dto.RegisterRequestDto;
import com.app.showbooking.dto.UserDto;
import com.app.showbooking.entities.User;

public interface UserService {
	
	User registerUser(RegisterRequestDto registerRequest);
	
    User authenticateUser(LoginRequestDto loginRequest);

	List<User> getAllUsers();

	User addNewUser(User newUser);

	User deleteUser(Long userId);

	UserDto updateUser(Long userId, UserDto updUserDto);

}
