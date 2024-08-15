package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.dto.SeatDto;

public interface SeatService {

	List<SeatDto> getAllSeats();

	SeatDto addNewSeat(SeatDto newSeatDto);

}
