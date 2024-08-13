package com.app.showbooking.dto;

import com.app.showbooking.entities.SeatStatus;
import com.app.showbooking.entities.SeatType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SeatDto {

	private Long seatId;

	private SeatType seatType;

	private SeatStatus seatStatus;

	private Long screen_id;
}
