package com.app.showbooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.showbooking.entities.Movie;
import com.app.showbooking.services.AdminService;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminservice;

	@PostMapping("/addnewmoviedetails")
	public ResponseEntity<?> addMovieDetails(@RequestBody Movie movie) {
		Movie moviedetail = adminservice.addMoviedetail(movie);
		if (moviedetail == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Wrong Data");
		return ResponseEntity.status(HttpStatus.OK).body(movie);
	}

	@DeleteMapping("/deletemovie/{id}")
	public ResponseEntity<String> deleteMovie(@PathVariable("id") Long movieId) {
		String isDeleted = adminservice.deleteMovieById(movieId);
		if (isDeleted != null) {
			return ResponseEntity.ok("Movie deleted successfully.");
		} else {
			return ResponseEntity.status(404).body("Movie not found.");
		}
	}

	@GetMapping("/viewmoviedetails/{id}")
	public ResponseEntity<?> ViewMovieDetails(@PathVariable long id) {
		Object movie = adminservice.findMovieDetailsById(id);
		if (movie == null)
			return ResponseEntity.status(404).body("Movie not found.");
		return ResponseEntity.ok(movie);
	}

	@PutMapping("/updatemovie/{theatreId}")
	public ResponseEntity<?> UpdateMovie(@PathVariable int movieId, @RequestBody Movie Movie) {
		Movie movie = adminservice.updateMovie(movieId, Movie);
		if (movie == null)
			return ResponseEntity.status(404).body("Movie not found.");
		return ResponseEntity.ok(movie);
	}

}
