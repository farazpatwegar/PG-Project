package com.app.showbooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.showbooking.dto.UserDto;
import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.User;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.services.UserService;

@RestController
@RequestMapping("/users")
public class HomeController {
	@Autowired
	private UserService userService;
	
	
	//register user===add new user
	
	@PostMapping("/registerUser")
	public ResponseEntity<?> addNewUser(@RequestBody User newUser){
		try {
			return new ResponseEntity<>(userService.addNewUser(newUser),HttpStatus.CREATED);
			
		}
		catch(CustomException e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PutMapping("/updateUser/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Long userId,@RequestBody UserDto updUserDto){
		try {
			return new ResponseEntity<>(userService.updateUser(userId, updUserDto),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}

}
