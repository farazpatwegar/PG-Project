package com.app.showbooking.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.showbooking.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	Movie findByTitle(String movieTitle);
	
	/*
	 *  @Query("SELECT m FROM Movie m WHERE " +
           "m.title LIKE %:searchTerm% OR " +
           "m.description LIKE %:searchTerm% OR " +
           "m.language LIKE %:searchTerm%")
    List<Movie> searchMovies(@Param("searchTerm") String searchTerm);*/
	
	@Query("select m from Movie m where m.title like %:searchTerm%")
	List<Movie> searchMovies(@Param("searchTerm") String searchTerm);
}
