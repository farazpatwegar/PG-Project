package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Cource;
import com.app.service.CourceService;

@RestController
@RequestMapping("/cource")
public class CourceController {

	@Autowired
	private CourceService courceService;
	
	@PostMapping
	public String launchNerCourse(@RequestBody Cource cource ) {
		return courceService.lunchNewCource(cource);
	}
}
