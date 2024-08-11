package com.project.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Movies;

public interface MovieDao extends JpaRepository<Movies, Integer>{

}
