package com.app.showbooking.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.dto.LoginRequestDto;
import com.app.showbooking.dto.RegisterRequestDto;
import com.app.showbooking.dto.UserDto;
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
    public User registerUser(RegisterRequestDto registerRequest) {
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword()); 
        user.setRole(registerRequest.getRole()); 
        user.setContactNumber(registerRequest.getContactNumber());
        user.setAddress(registerRequest.getAddress());
        return userRepository.save(user);
    }

    @Override
    public User authenticateUser(LoginRequestDto loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return user;
        }
        return null; 
    }
	
	
	

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
				
		User updatedUser=modelMapper.map(updUserDto, User.class);
		//setting the non-modifiable attributes
		updatedUser.setUserId(userId);
		updatedUser.setEmail(user.getEmail());
		updatedUser.setPassword(user.getPassword());
		updatedUser.setRole(user.getRole());
		
		User savedUser=userRepository.save(updatedUser);
		
		return modelMapper.map(savedUser,UserDto.class);
	}

	
}
