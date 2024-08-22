package com.app.showbooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.showbooking.dto.PaymentDto;
import com.app.showbooking.dto.ShowDto;
import com.app.showbooking.dto.UserDto;
import com.app.showbooking.entities.Contact;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.services.ContactService;
import com.app.showbooking.services.PaymentService;
import com.app.showbooking.services.TicketService;
import com.app.showbooking.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private ContactService contactService;
	
	@Autowired
	private PaymentService paymentService;
	
	@Autowired
	private TicketService ticketService;

	@PutMapping("/updateUser/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Long userId,@RequestBody UserDto updUserDto){
		try {
			return new ResponseEntity<>(userService.updateUser(userId, updUserDto),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/addNewContactUsDetails")
	public ResponseEntity<?> addNewContactUsDetails(@RequestBody Contact newContact){
		try {
			return new ResponseEntity<>(contactService.addNewContactUsDetails(newContact),HttpStatus.CREATED);
			
		}
		catch(CustomException e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	@PostMapping("/addNewPaymentDetails")
	public ResponseEntity<?> addNewPaymentDetails(@RequestBody PaymentDto newPaymentDto){
		try {
			return new ResponseEntity<>(paymentService.addNewPaymentDetails(newPaymentDto), HttpStatus.CREATED);
			
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	//customer views his/her ticket
	@GetMapping("/customerViewsTicket/{userId}")
	public ResponseEntity<?> customerViewsTicket(@PathVariable Long userId){
		try {

			return new ResponseEntity<>(ticketService.customerViewsTicket(userId), HttpStatus.OK);
		}
		catch(Exception e) {

			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	//customer makes payment, then ticket entry should be done in Tickets Table
}
