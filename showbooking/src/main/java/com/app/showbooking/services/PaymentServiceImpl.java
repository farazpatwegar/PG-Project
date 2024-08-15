package com.app.showbooking.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.dto.PaymentDto;
import com.app.showbooking.entities.Payment;
import com.app.showbooking.entities.User;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.PaymentRepository;
import com.app.showbooking.repositories.UserRepository;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<Payment> getAllPayments() {
		// TODO Auto-generated method stub
		return paymentRepository.findAll();
	}

	@Override
	public PaymentDto addNewPaymentDetails(PaymentDto newPaymentDto) {
		User user=userRepository.findById(newPaymentDto.getUser_id()).orElseThrow(()-> new CustomException("Invalid User id while making payment"));
		
		
		Payment payment=modelMapper.map(newPaymentDto, Payment.class);
		payment.setUser(user);
		
		Payment savedPayment=paymentRepository.save(payment);
		return modelMapper.map(savedPayment, PaymentDto.class);
	}
}
