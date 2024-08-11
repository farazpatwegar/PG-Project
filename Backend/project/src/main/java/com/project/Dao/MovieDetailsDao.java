package com.project.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.Dto.MovieDetailsDto;
import com.project.entities.MovieDetails;

public interface MovieDetailsDao extends JpaRepository<MovieDetails,Integer>{

	@Query(value="select m.name, m.description, m.certification, m.release_date, m.status, md.language,md.genre, md.format, m.banner from Movies m inner join movie_details md on m.movies_id = md.movie_id where md.mdetail_id = :movieDetailsId",nativeQuery = true)
	Object[] getMovieDetailsById(@Param("movieDetailsId") int movieDetailsId);

}
