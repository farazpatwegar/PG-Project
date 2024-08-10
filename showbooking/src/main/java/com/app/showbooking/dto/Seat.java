package com.app.showbooking.dto;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


public class Seat {

	private Long seatId;
	

	private SeatType seatType;
	

	private SeatStatus seatStatus;
	
//	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	@JoinColumn(name="user_id",nullable = false)
//	private User user; 
	

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
