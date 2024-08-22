package com.app.showbooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.showbooking.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Long> {

}
