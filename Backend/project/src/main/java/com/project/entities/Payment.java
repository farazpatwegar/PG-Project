package com.project.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="Payments")
public class Payment 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int payment_id;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL) 
	@JoinColumn(name = "user_id") // FK
	private User user ;
	
	@Column
	@DateTimeFormat(pattern = "dd/MM/yyyy hh:mm:ss")
	private LocalDateTime date_time;
	
	@Column
	private double total_amount;
	
	@Column
	private String payment_mode;
	
	@OneToOne(mappedBy = "payment",fetch = FetchType.LAZY,cascade =CascadeType.ALL)
	private Ticket ticket;
	
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public LocalDateTime getDate_time() {
		return date_time;
	}
	public void setDate_time(LocalDateTime date_time) {
		this.date_time = date_time;
	}
	public double getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}
	public String getPayment_mode() {
		return payment_mode;
	}
	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", date_time=" + date_time
				+ ", total_amount=" + total_amount + ", payment_mode=" + payment_mode + "]";
	}
	public Payment( LocalDateTime date_time, double total_amount, String payment_mode) {
		super();
		this.date_time = date_time;
		this.total_amount = total_amount;
		this.payment_mode = payment_mode;
	}
	
	public Payment( User user, LocalDateTime date_time, double total_amount, String payment_mode) {
		super();
		this.user = user;
		this.date_time = date_time;
		this.total_amount = total_amount;
		this.payment_mode = payment_mode;
	}
	public Payment() {
		super();
	}
	

}
