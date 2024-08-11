package com.project.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int user_id;
	@Column
	private String first_name;
	@Column
	private String last_name;
	@Column
	private String address;
	@Column
	private String contact_no;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String role;
	/*
	 * @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<MovieReviewRating> mrrList;
	 * 
	 * @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<Ticket> ticketList;
	 * 
	 * @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<Payment> paymentList;
	 * 
	 * @OneToMany(mappedBy = "user",fetch = FetchType.LAZY,cascade =CascadeType.ALL)
	 * private List<Theaters> theaterList;
	 */
//	  @OneToOne(mappedBy = "user",fetch = FetchType.LAZY,targetEntity =
//	  CounterPerson.class ,cascade =CascadeType.ALL) private CounterPerson cp;
	 
	/*
	 * @OneToMany(mappedBy = "user",fetch = FetchType.LAZY,targetEntity =
	 * TheaterReview.class ,cascade =CascadeType.ALL) private List<TheaterReview>
	 * theatrereview;
	 */
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
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

	/*
	 * public List<MovieReviewRating> getMrrList() { return mrrList; } public void
	 * setMrrList(List<MovieReviewRating> mrrList) { this.mrrList = mrrList; }
	 * public List<Ticket> getTicketList() { return ticketList; } public void
	 * setTicketList(List<Ticket> ticketList) { this.ticketList = ticketList; }
	 * public List<Payment> getPaymentList() { return paymentList; }
	 */
	/*
	 * public void setPaymentList(List<Payment> paymentList) { this.paymentList =
	 * paymentList; }
	 */
	
	/*
	 * public List<TheaterReview> getTheatrereview() { return theatrereview; }
	 * public void setTheatrereview(List<TheaterReview> theatrereview) {
	 * this.theatrereview = theatrereview; }
	 */
	/*
	 * public List<Theaters> getTheater() { return theaterList; } public void
	 * setTheater(List<Theaters> theaterList) { this.theaterList = theaterList; }
	 */
	
//	public CounterPerson getCp() {
//		return cp;
//	}
//	public void setCp(CounterPerson cp) {
//		this.cp = cp;
//	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", first_name=" + first_name + ", last_name=" + last_name + ", address="
				+ address + ", contact_no=" + contact_no + ", email=" + email + ", password=" + password + ", role="
				+ role + "]";
	}
	public User(String first_name, String last_name, String address, String contact_no, String email,
			String password, String role) {
		super();
		
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
		this.contact_no = contact_no;
		this.email = email;
		this.password = password;
		this.role = role;
		/*
		 * this.mrrList = new ArrayList<MovieReviewRating>(); this.ticketList = new
		 * ArrayList<Ticket>(); this.paymentList = new ArrayList<Payment>();
		 * this.theaterList=new ArrayList<Theaters>();
		 */
		 
	}
	public User() {
		super();
	}
	public User(int user_id, String first_name, String last_name, String address, String contact_no, String email,
			String password, String role) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
		this.contact_no = contact_no;
		this.email = email;
		this.password = password;
		this.role = role;
		/*
		 * this.mrrList = new ArrayList<MovieReviewRating>(); this.ticketList = new
		 * ArrayList<Ticket>(); this.paymentList = new ArrayList<Payment>();
		 * this.theaterList=new ArrayList<Theaters>();
		 */
	}
	
	
}
