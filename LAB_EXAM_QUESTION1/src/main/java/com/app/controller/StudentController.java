package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Student;
import com.app.service.StudentService;

@RestController
@RequestMapping("/Student")
public class StudentController {
	
	@Autowired
	private StudentService studentservice;
	
	
	 @PostMapping public String AddSTudent(@RequestBody Student
	 student, @RequestParam  long cid) { return
	 studentservice.addStudent(student,cid); }
	 
	 
	 //View all students , for a specific course
	 @GetMapping("/course_title/{title}")
	 public List<Student> getAllStudentByCourceTitle(@PathVariable  String title){
		 return studentservice.getStudentByTitle(title);
	 }

}
