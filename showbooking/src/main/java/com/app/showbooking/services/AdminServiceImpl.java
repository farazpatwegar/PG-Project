package com.app.showbooking.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Movie;
import com.app.showbooking.repositories.MovieRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private MovieRepository movierepo;
	

	@Override
	public Movie addMoviedetail(Movie movie) {
		
		Movie mv = movierepo.save(movie);
		return mv;
	}


	@Override
	public String deleteMovieById(Long movieId) {
		 movierepo.deleteById(movieId);
		 return "Deleted!!";
	}


	@Override
	public Object findMovieDetailsById(long id) {
		Object movie = movierepo.findById(id);
		if(movie==null)
		    return null;
		
		return movie;
	}


	@Override
	public Movie updateMovie(long movieId, Movie upmovie) {
		Object movie = movierepo.findById(movieId);
		
		return null;
	}

}
