package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.dto.TicketDetailsDto;
import com.app.showbooking.entities.Ticket;

public interface TicketService {

	List<Ticket> getAllTickets();

	List<TicketDetailsDto> customerViewsTicket(Long userId);

}
