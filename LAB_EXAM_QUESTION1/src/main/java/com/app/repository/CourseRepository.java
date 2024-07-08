package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Cource;
@Repository
public interface CourseRepository extends JpaRepository<Cource, Long> {

	Cource findByTitle(String Title);
}
