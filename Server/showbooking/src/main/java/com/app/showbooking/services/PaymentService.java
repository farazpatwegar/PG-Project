package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.dto.PaymentDto;
import com.app.showbooking.entities.Payment;

public interface PaymentService {

	List<Payment> getAllPayments();

	PaymentDto addNewPaymentDetails(PaymentDto newPaymentDto);

}
