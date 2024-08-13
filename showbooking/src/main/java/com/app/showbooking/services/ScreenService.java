package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.entities.Screen;

public interface ScreenService {

	List<Screen> getAllScreens();

	Screen addNewScreen(Screen newScreen);

	Screen deleteScreen(Long screenId);

	Screen updateScreen(Long screenId, Screen updScreen);

}
