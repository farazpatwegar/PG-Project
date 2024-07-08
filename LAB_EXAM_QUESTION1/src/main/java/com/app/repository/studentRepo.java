package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entities.Student;

@Repository
public interface studentRepo extends JpaRepository<Student, Long> {
	 @Query("SELECT s FROM Student s JOIN s.cource c WHERE c.title = :courseTitle")
	List<Student> findByCourseTitle(@Param("courseTitle")  String title);
}
