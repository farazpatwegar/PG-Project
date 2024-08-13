package com.app.showbooking.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.dto.SeatDto;
import com.app.showbooking.entities.Screen;
import com.app.showbooking.entities.Seat;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.ScreenRepository;
import com.app.showbooking.repositories.SeatRepository;

@Service
@Transactional
public class SeatServiceImpl implements SeatService{
	@Autowired
	private SeatRepository seatRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	private ScreenRepository screenRepository;

	@Override
	public List<SeatDto> getAllSeats() {
		
		return seatRepository.findAll()
				.stream()
				.map(seat->modelMapper.map(seat,SeatDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public SeatDto addNewSeat(SeatDto newSeatDto) {
		Screen screen=screenRepository.findById(newSeatDto.getScreen_id()).orElseThrow(()->new CustomException("Invalid screen id"));
		
		Seat seat=modelMapper.map(newSeatDto,Seat.class);
		seat.setScreen(screen);
		Seat savedSeat=seatRepository.save(seat);
		
		SeatDto savedSeatDto=modelMapper.map(savedSeat,SeatDto.class);
		return savedSeatDto;
		
	}

}
