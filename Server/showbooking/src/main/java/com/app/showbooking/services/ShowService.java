package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.dto.ShowDto;

public interface ShowService {


	
	List<ShowDto> getAllShows();

	ShowDto addNewShow(ShowDto newShow);

	ShowDto deleteShow(Long showId);

	ShowDto updateShow(Long showId, ShowDto newShowDto);

}
