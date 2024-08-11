package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entities.Screen;

public interface ScreenDao extends JpaRepository<Screen,Integer>{

	@Query(value="select screen_id,screen_name,time_slot from Screen s where s.theatre_id =:theatreId",nativeQuery = true)
	 List<Object[]> FindScreenById(@Param("theatreId")int theatreId);

	@Query(value="select * from Screen s where s.screen_name =:screenName",nativeQuery = true)
	List<Screen> findByScreenName(@Param("screenName")String screenName);

}
