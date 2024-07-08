package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Cource;
import com.app.repository.CourseRepository;

@Service
public class CourceService {
	
	@Autowired
	private CourseRepository courceRepository; 
	
	public String lunchNewCource(Cource cource) {
		
		courceRepository.save(cource);
		return "Cource launched successfully";
	}
}
