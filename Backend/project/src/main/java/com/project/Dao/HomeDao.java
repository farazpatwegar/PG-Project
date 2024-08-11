package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.Dto.MovieDetailsDto;
import com.project.Dto.TheatreAndTimeslot;
import com.project.entities.*;

public interface HomeDao extends JpaRepository<Movies, Integer>{

	@Query(value="select m.movies_id,m.name, m.description, m.certification, m.release_date, m.status,md.language,md.genre,md.format , m.banner from movies m \r\n"
			+ "inner join movie_details md on md.movie_id = m.movies_id \r\n"
			+ "inner join Screen s on md.mdetail_id = s.mdetails_id\r\n"
			+ "inner join Theatres t on s.theatre_id = t.theatre_id\r\n"
			+ "where city =:cityname  ",nativeQuery = true)
	List<Object[]> findAllByCity(@Param("cityname")String cityname);
    
	@Query(value="select md.mdetail_id,m.name, m.description, m.certification, m.release_date, m.status, md.language,\r\n"
			+ "md.genre, md.format, m.banner from movies m \r\n"
			+ "inner join movie_details md on md.movie_id = m.movies_id \r\n"
			+ "inner join Screen s on md.mdetail_id = s.mdetails_id\r\n"
			+ "inner join Theatres t on s.theatre_id = t.theatre_id\r\n"
			+ "where city =:city and md.language =:language",nativeQuery = true)
	List<Object[]> findAllByLanguage(@Param("city")String city,@Param("language")String language);

	@Query(value="select md.mdetail_id,m.name, m.description, m.certification, m.release_date, m.status, md.language,\r\n"
			+ "md.genre, md.format, m.banner from Movies m \r\n"
			+ "inner join movie_details md on md.movie_id = m.movies_id \r\n"
			+ "inner join Screen s on md.mdetail_id = s.mdetails_id\r\n"
			+ "inner join Theatres t on s.theatre_id = t.theatre_id\r\n"
			+ "where city =:cityname and md.genre like %:genre%",nativeQuery = true)
	List<Object[]> findAllByGenre(@Param("cityname")String cityname, @Param("genre")String genre);

	@Query(value="select md.mdetail_id,m.name, m.description, m.certification, m.release_date, m.status, md.language,\r\n"
			+ "md.genre, md.format, m.banner from Movies m \r\n"
			+ "inner join movie_details md on md.movie_id = m.movies_id \r\n"
			+ "inner join Screen s on md.mdetail_id = s.mdetails_id\r\n"
			+ "inner join Theatres t on s.theatre_id = t.theatre_id\r\n"
			+ "where city =:cityname and t.name =:theatre",nativeQuery = true)
	List<Object[]> findAllByTheatre(@Param("cityname")String cityname, @Param("theatre")String theatre);

	@Query(value="select t.theatre_id,t.name,s.screen_id, s.time_slot from Screen s  \r\n"
			+ "inner join Theatres t on s.theatre_id = t.theatre_id\r\n"
			+ "where t.city =:cityname and s.mdetails_id =:movieid",nativeQuery = true)
	List<Object[]> findAllByMovieId(@Param("movieid")int movieid, @Param("cityname")String cityname);

	@Query(value="select u.first_name, u.last_name, reviews from user u inner join theatre_review tr on u.user_id = tr.user_id where tr.theatre_id = :theatreId",nativeQuery = true)
	List<Object[]> findTheatreReviews(@Param("theatreId") int theatreId);

	@Query(value = "select * from Theatres where user_id=:theatremanagerid",nativeQuery = true)
    List<Object[]> getTheatresByManagerId(@Param("theatremanagerid") int theatremanagerid);

    @Query(value ="select city from theatres" ,nativeQuery = true)
    List<Object> getCity();
	
	@Query(value="select m.name,banner from movies m left join movie_details md on m.movies_id=md.movie_id \r\n"
			+ "	left join screen s on s.mdetails_id=md.mdetail_id left join theatres t on t.theatre_id=s.theatre_id \r\n"
			+ "	where status='upcoming' and city=:city",nativeQuery = true)
	Object[] getBannerForUpcoming(@Param("city")String city);

	@Query(value="select m.name,banner from movies m left join movie_details md on m.movies_id=md.movie_id \r\n"
			+ " left join screen s on s.mdetails_id=md.mdetail_id left join theatres t on t.theatre_id=s.theatre_id \r\n"
			+ " where status='trending' and city=:city",nativeQuery = true)
	Object[] getBannerForTrending(@Param("city")String city);
	
}
