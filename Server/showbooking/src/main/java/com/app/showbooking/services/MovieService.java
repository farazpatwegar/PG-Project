package com.app.showbooking.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.showbooking.entities.Movie;


public interface MovieService {

	//get all
	//get by id
	//insert
	//delete
	//update
	List<Movie> getAllMovies();
	
	Movie addNewMovie(Movie newMovie);
	
	Movie deleteMovie(Long id);
	
	Movie updateMovie(Long id,Movie updMovie);
	
	Movie getMovieById(Long id);

	Movie getMovieDetailsByMovieTitle(String movieTitle);

	List<Movie> searchMovie(String searchTerm);
}
