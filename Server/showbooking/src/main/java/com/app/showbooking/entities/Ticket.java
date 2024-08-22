package com.app.showbooking.entities;

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

@Entity
@Table(name="tickets")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ticket_id")
	private Long ticketId;
	
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="show_id")
	private Show show;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="seat_id")
	private Seat seat;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="screen_id")
	private Screen screen;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="payment_id")
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
