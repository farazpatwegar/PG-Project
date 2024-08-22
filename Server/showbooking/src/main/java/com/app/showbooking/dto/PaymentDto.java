package com.app.showbooking.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class PaymentDto {

	
	private Long paymentId;
	
	private double totalAmount;
	
	private String paymentMethod;
	
	private LocalDateTime paymentDateTime;
	
	private String cardHolderName;
	
	private String cardNumber;
	
	private int expiryMonth;
	
	private int expiryYear;
	
	private int cvv;
		
	private Long user_id;
}
