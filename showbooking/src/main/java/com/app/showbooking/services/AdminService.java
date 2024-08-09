package com.app.showbooking.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Movie;
@Service
@Transactional
public interface AdminService {

	Movie addMoviedetail(Movie movie);

	String deleteMovieById(Long movieId);

	Object findMovieDetailsById(long id);

	Movie updateMovie(long movieId, Movie movie);

}
