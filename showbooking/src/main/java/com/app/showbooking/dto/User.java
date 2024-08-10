package com.app.showbooking.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

public class User {


	private Long userId;
	

	private String firstName;

	private String lastName;

	private String email;

	private String password;

	private Role role;

	private String contactNumber;

	private String address;
	
	
		
	public User() {
		
	}

	public User(String firstName, String lastName, String email, String password, Role role, String contactNumber,
			String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.contactNumber = contactNumber;
		this.address = address;
	}

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}



	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", role=" + role + ", contactNumber=" + contactNumber + ", address=" + address + "]";
	}
	
	
	

	

	

	
	
	
	
}
