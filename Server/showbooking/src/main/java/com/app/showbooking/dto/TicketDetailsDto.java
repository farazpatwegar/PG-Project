package com.app.showbooking.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TicketDetailsDto {
//	private Long ticket_id;

	private String firstName;
	private String lastName;
	private LocalDate showDate;
	private LocalTime showTime;
	private String movieTitle;
	private Long screenNumber;
	private Long seatNumber;
	private double paymentAmount;
}
