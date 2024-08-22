package com.app.showbooking.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.showbooking.entities.Ticket;
import com.app.showbooking.entities.User;

public interface TicketRepository extends JpaRepository<Ticket,Long> {

	List<Ticket> findALLByUser(User user);
}
