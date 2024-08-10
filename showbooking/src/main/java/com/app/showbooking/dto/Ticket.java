package com.app.showbooking.dto;

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

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


public class Ticket {


	private Long ticketId;
	
	

	private User user;
	

	private Show show;
	

	private Seat seat;

	private Screen screen;
	

	private Payment payment;

	public Ticket(User user, Show show, Seat seat, Screen screen, Payment payment) {
		super();
		this.user = user;
		this.show = show;
		this.seat = seat;
		this.screen = screen;
		this.payment = payment;
	}

	
	
//	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	@JoinColumn(name="payment_id")
//	private Payment payment;
	
	

//	public Ticket(User user, Show show, Seat seat, Payment payment) {
//		super();
//		this.user = user;
//		this.show = show;
//		this.seat = seat;
//		this.payment = payment;
//	}
	
	
	
}
