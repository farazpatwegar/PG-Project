package com.app.showbooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.showbooking.dto.UserDto;
import com.app.showbooking.entities.Contact;
import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.User;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.services.ContactService;
import com.app.showbooking.services.MovieService;
import com.app.showbooking.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class HomeController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private MovieService movieService;
	
	
	
	
	//register user===add new user	
//	@PostMapping("/registerUser")
//	public ResponseEntity<?> addNewUser(@RequestBody User newUser){
//		try {
//			return new ResponseEntity<>(userService.addNewUser(newUser),HttpStatus.CREATED);
//			
//		}
//		catch(CustomException e)
//		{
//			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
//		}
//		
//	}
	
	@GetMapping("/getMovieDetailsByMovieTitle/{movieTitle}")
	public ResponseEntity<?> getMovieDetailsByMovieTitle(@PathVariable String movieTitle){
		try {
			return new ResponseEntity<>(movieService.getMovieDetailsByMovieTitle(movieTitle),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@GetMapping("/searchMovie/{searchTerm}")
	public ResponseEntity<?> searchMovie(@PathVariable String searchTerm){
		try {
			return new ResponseEntity<>(movieService.searchMovie(searchTerm),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
			
		}
	}
	
	

}
