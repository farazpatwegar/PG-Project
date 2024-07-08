package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Student {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long id;
	    
	    private String firstName;
	    private String lastName;
	    private String email;
	    private int scoreObtained;

	   @ManyToOne
	   @JoinColumn(name="cource_id")
	   private Cource cource;
	   
	   
	   

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(String firstName, String lastName, String email, int scoreObtained) {
		super();
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.scoreObtained = scoreObtained;
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getScoreObtained() {
		return scoreObtained;
	}

	public void setScoreObtained(int scoreObtained) {
		this.scoreObtained = scoreObtained;
	}

	public Cource getCource() {
		return cource;
	}

	public void setCource(Cource cource) {
		this.cource = cource;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", scoreObtained=" + scoreObtained + "]";
	}

	   
	   
	   
}
