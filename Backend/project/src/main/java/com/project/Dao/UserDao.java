package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	@Query(value="SELECT * from User where role='theatre_manager' ",nativeQuery = true)
	List<Object[]> findByRole();

	User findByEmail(String email);

	@Query(value="SELECT * from theatres where user_id=:userid ",nativeQuery = true)
	List<Object[]> getManagerDetails(@Param("userid") int userid);
}
