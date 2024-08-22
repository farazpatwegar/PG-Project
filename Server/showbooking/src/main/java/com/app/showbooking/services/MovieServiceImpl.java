package com.app.showbooking.services;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Movie;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.MovieRepository;

@Service
@Transactional
public class MovieServiceImpl implements MovieService{

	@Autowired
	private MovieRepository movieRepository;
	
	@Override
	public List<Movie> getAllMovies() {
		List<Movie> list=movieRepository.findAll();
		if(list!=null)
			return movieRepository.findAll();
		else
			throw new CustomException("list is null");
	}

	@Override
	public Movie addNewMovie(Movie newMovie) {
		
		return movieRepository.save(newMovie);
	}

	@Override
	public Movie deleteMovie(Long id) {
		Optional<Movie> movie=movieRepository.findById(id);
		
		if(movie.isPresent())
		{
			movieRepository.deleteById(id);
			return movie.get();
		}
		else {
			throw new CustomException("Invalid movie id");
		}
		
	}

	@Override
	public Movie updateMovie(Long id, Movie updMovie) {
		Optional<Movie> movie=movieRepository.findById(id);
		
		if(movie.isPresent())
		{
			updMovie.setMovieId(id);
			return movieRepository.save(updMovie);
		}
		else
		{
			throw new CustomException("Invalid Movie id");
		}
		
		
		
	}

	@Override
	public Movie getMovieById(Long id) {
		
		Optional<Movie> movie = movieRepository.findById(id);
		if(movie.isPresent())
		{
			return movie.get();
		}
		else {
			throw new CustomException("Movie id not found");
		}
		
			
	}

	@Override
	public Movie getMovieDetailsByMovieTitle(String movieTitle) {
		Movie movie=movieRepository.findByTitle(movieTitle);
		if(movie!=null)
			return movie;
		else
			throw new CustomException("So such movie present!!");
	}

	@Override
	public List<Movie> searchMovie(String searchTerm) {
		List<Movie> movieList=movieRepository.searchMovies(searchTerm);
		if(movieList.isEmpty())
			throw new CustomException("No matching movies found!!");
		return movieList;
	}

}
