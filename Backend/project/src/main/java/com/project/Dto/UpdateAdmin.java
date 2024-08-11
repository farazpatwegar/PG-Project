package com.project.Dto;

public class UpdateAdmin {

	private String firstname;
	private String lastname;
	private String address;
	private String mobile;
	private String email;
	public UpdateAdmin() {
		super();
	}
	public UpdateAdmin(String firstname, String lastname, String address, String mobile, String email) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.mobile = mobile;
		this.email = email;
	}
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "UpdateAdmin [firstname=" + firstname + ", lastname=" + lastname + ", address=" + address + ", mobile="
				+ mobile + ", email=" + email + "]";
	}
	
}
