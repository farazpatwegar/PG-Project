package com.app.showbooking.services;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.dto.ShowDto;
import com.app.showbooking.dto.UserDto;
import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.Screen;
import com.app.showbooking.entities.Show;
import com.app.showbooking.entities.User;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@Override
	public User addNewUser(User newUser) {
		User user=userRepository.findByEmail(newUser.getEmail());
		if(user!=null)
			throw new CustomException("User already exists!! Email id present in Users table");
		
		return userRepository.save(newUser);
	}

	@Override
	public User deleteUser(Long userId) {
		User user=userRepository.findById(userId).orElseThrow(()->new CustomException("User not found!! Inalid user id"));
		
		userRepository.deleteById(userId);
		return user;
	}

	@Override
	public UserDto updateUser(Long userId, UserDto updUserDto) {
		User user=userRepository.findById(userId).orElseThrow(()->new CustomException("User not found!! Inalid user id"));
		
		/*
		 * Show show = showRepository.findById(showId).orElseThrow(() -> new CustomException("Invalid show Id"));
		
		Movie movie=movieRepository.findById(newShowDto.getMovie_id()).orElseThrow(()->new CustomException("Invalid movie id"));		

		Screen screen=screenRepository.findById(newShowDto.getScreen_id()).orElseThrow(()->new CustomException("Invalid screen id"));
		
		newShowDto.setShowId(showId);
		Show updatedShow=modelMapper.map(newShowDto, Show.class);
		

	 	Show savedShow=showRepository.save(updatedShow);
		return modelMapper.map(savedShow, ShowDto.class);
		 * */
		
		User updatedUser=modelMapper.map(updUserDto, User.class);
		
		User savedUser=userRepository.save(updatedUser);
		
		return modelMapper.map(savedUser,UserDto.class);
	}

	
}
