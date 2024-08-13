package com.app.showbooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.showbooking.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
