package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Cource;
import com.app.entities.Student;
import com.app.repository.CourseRepository;
import com.app.repository.studentRepo;

@Service
public class StudentService {
	
	@Autowired
	private studentRepo studentrepo;
	
	@Autowired
	private CourseRepository courseRepository;
	
	public String addStudent(Student student, long cid) {
		Cource cource=courseRepository.findById(cid).orElse(null);
		if(cource!=null && student.getScoreObtained()>=cource.getMinScore()) {
			student.setCource(cource);
			studentrepo.save(student);
			return "Student added";
			
		}else {
			return "can not add student";
		}
	}
	
	public List<Student> getStudentByTitle(String title){
		return studentrepo.findByCourseTitle(title);
	}

}
