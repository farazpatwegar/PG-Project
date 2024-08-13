package com.app.showbooking.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.Payment;
import com.app.showbooking.repositories.MovieRepository;
import com.app.showbooking.repositories.PaymentRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private MovieRepository movierepo;

	@Autowired
	private PaymentRepository paymentrepo;

	@Override
	public Movie addMoviedetail(Movie movie) {

		Movie mv = movierepo.save(movie);
		return mv;
	}

	@Override
	public String deleteMovieById(long movieId) {
		movierepo.deleteById(movieId);
		return "Deleted!!";
	}

	@Override
	public Object findMovieDetailsById(long id) {
		Object movie = movierepo.findById(id);
		if (movie == null)
			return null;

		return movie;
	}

	@Override
	public Movie updateMovie(long movieId, Movie otherMovie) {
		Movie movie = movierepo.getById(movieId);
		if (movie != null) {
			movie.setDuration(otherMovie.getDuration());
			movie.setDescription(otherMovie.getDescription());
			movie.setTitle(otherMovie.getTitle());
			movie.setRating(otherMovie.getRating());
			movie.setLanguage(otherMovie.getLanguage());
			movie.setReleaseDate(otherMovie.getReleaseDate());
			return movie;
		}
		return null;
	}

	@Override
	public List<Payment> getAllPaymentDetails() {
		List<Payment> payments = paymentrepo.findAll();
		if (payments != null)
			return payments;
		return null;
	}

	@Override
	public List<Movie> getAllMovieDetails() {
		List<Movie> movies = movierepo.findAll();
		if (movies != null)
			return movies;
		return null;
	}

}
