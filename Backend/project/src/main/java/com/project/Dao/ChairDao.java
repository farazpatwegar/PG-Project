package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.Dto.ChairAndStatusDto;
import com.project.entities.ChairStatus;

public interface ChairDao extends JpaRepository<ChairStatus, Integer>{

	@Query(value="select * from chair_status where screen_id =:screenid ",nativeQuery = true)
	List<Object[]> findAllChairsById(@Param("screenid") int screenid);

	@Query(value="select price from chair_status where screen_id =:screenid and chair_status_id =:chairid",nativeQuery = true)
	Double findAllById(@Param("screenid")int screenid,@Param("chairid")int chairstatusid);
	
	@Modifying
	@Query(value="update chair_status set chair_status = \"booked\" where chair_status_id =:chairid ",nativeQuery = true)
	void updateChairStatus(@Param("chairid") int chairid);
	
	
	@Query(value = "select chair_type,price from chair_status where screen_id = :screenid group by chair_type,price",nativeQuery = true)
	List<Object[]> getByscreenId(@Param("screenid")int screenid);

	@Modifying
	@Query(value ="update Chair_Status set price=:price where screen_id=:screenid and chair_type=:name ",nativeQuery = true)
	void updatePriceByscreenId(@Param("screenid")int screenid,@Param("name")String name,@Param("price")double price);

}
