package com.app.showbooking.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="payments")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="payment_id")
	private Long paymentId;
	
	@Column(name="total_amount")
	private double totalAmount;
	
	@Column(name="payment_method")
	private String paymentMethod;
	
	@Column(name="payment_date_time")
	private LocalDateTime paymentDateTime;
	
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="user_id",nullable = false)
	private User user;


	public Payment(double totalAmount, String paymentMethod, LocalDateTime paymentDateTime, User user) {
		super();
		this.totalAmount = totalAmount;
		this.paymentMethod = paymentMethod;
		this.paymentDateTime = paymentDateTime;
		this.user = user;
	}
	
	

	//payment mode shouldn't be taken from user(auto-fill this field in front-end)
	
	
	
	
	
	
	
}
