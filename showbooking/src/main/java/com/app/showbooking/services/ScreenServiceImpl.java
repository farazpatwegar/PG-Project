package com.app.showbooking.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Screen;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.ScreenRepository;

@Service
@Transactional
public class ScreenServiceImpl implements ScreenService{
	
	@Autowired
	private ScreenRepository screenRepository;

	@Override
	public List<Screen> getAllScreens() {
		
		return screenRepository.findAll();
	}

	@Override
	public Screen addNewScreen(Screen newScreen) {
		
		return screenRepository.save(newScreen);
	}

	@Override
	public Screen deleteScreen(Long screenId) {
		Screen screen=screenRepository.findById(screenId).orElseThrow(()->new CustomException("Invalid screen id"));
		
		screenRepository.deleteById(screenId);
		return screen;
	}

	@Override
	public Screen updateScreen(Long screenId, Screen updScreen) {

		Screen screen=screenRepository.findById(screenId).orElseThrow(()->new CustomException("Invalid screen id"));
		
		updScreen.setScreenId(screenId);
		return screenRepository.save(updScreen);
	}

}
