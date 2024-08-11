package com.project.Dto;

public class UserSignUp 
{

	private String firstname;
	private String lastname;
	private String email;
	private String mobile;
	private String address;
	private String password;
	private String confirmPassword;
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	@Override
	public String toString() {
		return "UserSignUp [firstname=" + firstname + ", lastname=" + lastname + ", email=" + email + ", mobile="
				+ mobile + ", address=" + address + ", password=" + password + ", confirmPassword=" + confirmPassword
				+ "]";
	}
	public UserSignUp(String firstname, String lastname, String email, String mobile, String address, String password,
			String confirmPassword) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.mobile = mobile;
		this.address = address;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	public UserSignUp() {
		super();
	}
	
}
