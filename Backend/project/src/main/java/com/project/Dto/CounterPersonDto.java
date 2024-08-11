package com.project.Dto;

public class CounterPersonDto {
	private String firstName;
	private String lastName;
	private String address;
	private String contactNo;
	private String email;
	private String password;
	private String role;
	private int theatreid;
	private String counterName;
	public CounterPersonDto() {
		super();
	}
	public CounterPersonDto(String firstName, String lastName, String address, String contactNo, String email,
			String password, String role, int theatreid, String counterName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.contactNo = contactNo;
		this.email = email;
		this.password = password;
		this.role = role;
		this.theatreid = theatreid;
		this.counterName = counterName;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getTheatreid() {
		return theatreid;
	}
	public void setTheatreid(int theatreid) {
		this.theatreid = theatreid;
	}
	public String getCounterName() {
		return counterName;
	}
	public void setCounterName(String counterName) {
		this.counterName = counterName;
	}
	@Override
	public String toString() {
		return "CounterPersonDto [firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
				+ ", contactNo=" + contactNo + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", theatreid=" + theatreid + ", counterName=" + counterName + "]";
	}
	
	
	
}
