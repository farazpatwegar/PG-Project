package com.app.showbooking.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="seats")
@Getter
@Setter
@ToString
public class Seat {

	@Id
	@Column(name="seat_id",unique =  true)
	private Long seatId;
	
	@Enumerated(EnumType.STRING)
	@Column(name="seat_type")
	private SeatType seatType;
	
	@Enumerated(EnumType.STRING)
	@Column(name="seat_status")
	private SeatStatus seatStatus;
	
//	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	@JoinColumn(name="user_id",nullable = false)
//	private User user; 
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="screen_id",nullable = false)
	private Screen screen;

	
	
	public Seat() {
		super();
	}



	public Seat(SeatType seatType, SeatStatus seatStatus, Screen screen) {
		super();
		this.seatType = seatType;
		this.seatStatus = seatStatus;
		this.screen = screen;
	}



//	public Seat(SeatType seatType, SeatStatus seatStatus, User user, Screen screen) {
//		super();
//		this.seatType = seatType;
//		this.seatStatus = seatStatus;
//		this.user = user;
//		this.screen = screen;
//	}
	
	



	
	
	
}
