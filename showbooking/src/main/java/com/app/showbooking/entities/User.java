package com.app.showbooking.entities;

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

@Entity
@Table(name="users")//table name
@Getter
@Setter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Long userId;
	
	@Column(name="first_name",length=20)
	private String firstName;
	@Column(name="last_name",length = 20)
	private String lastName;
	@Column(length = 30, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	@Column(name="contact_number",length = 10)
	private String contactNumber;
	@Column(length = 30)
	private String address;
	
	
		
	public User() {
		
	}

	public User(String firstName, String lastName, String email, String password, String contactNumber,
			String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = Role.valueOf("Customer".toUpperCase()) ;
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
