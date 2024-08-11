package com.project.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Payment;


public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
