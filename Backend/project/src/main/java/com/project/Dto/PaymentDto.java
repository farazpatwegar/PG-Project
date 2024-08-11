package com.project.Dto;

import java.util.List;

public class PaymentDto {

	private int theaterid;
	private int screenid;
	private int userid;
	private String chairstatusid;
	private double price;
	private String email;
	private String contactNo;
	private String paymentMode;
	
	public PaymentDto(int theaterid, int screenid, int userid, String chairstatusid, double price, String email,
			String contactNo, String paymentMode) {
		super();
		this.theaterid = theaterid;
		this.screenid = screenid;
		this.userid = userid;
		this.chairstatusid = chairstatusid;
		this.price = price;
		this.email = email;
		this.contactNo = contactNo;
		this.paymentMode = paymentMode;
	}
	public PaymentDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	
	public int getTheaterid() {
		return theaterid;
	}
	public void setTheaterid(int theaterid) {
		this.theaterid = theaterid;
	}
	public int getScreenid() {
		return screenid;
	}
	public void setScreenid(int screenid) {
		this.screenid = screenid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getChairstatusid() {
		return chairstatusid;
	}
	public void setChairstatusid(String chairstatusid) {
		this.chairstatusid = chairstatusid;
	}
	@Override
	public String toString() {
		return "PaymentDto [theaterid=" + theaterid + ", screenid=" + screenid + ", userid=" + userid
				+ ", chairstatusid=" + chairstatusid + ", price=" + price + ", email=" + email + ", contactNo="
				+ contactNo + ", paymentMode=" + paymentMode + "]";
	}
	
	
}
