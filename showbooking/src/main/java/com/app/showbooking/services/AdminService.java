package com.app.showbooking.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.Payment;
@Service
@Transactional
public interface AdminService {

	Movie addMoviedetail(Movie movie);

	String deleteMovieById(long movieId);

	Object findMovieDetailsById(long id);

	Movie updateMovie(long movieId, Movie movie);

	List<Payment> getAllPaymentDetails();

	List<Movie> getAllMovieDetails();

}
