package com.app.showbooking.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.dto.TicketDetailsDto;
import com.app.showbooking.entities.Ticket;
import com.app.showbooking.entities.User;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.TicketRepository;
import com.app.showbooking.repositories.UserRepository;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {

	@Autowired
	private TicketRepository ticketRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<Ticket> getAllTickets() {
		return ticketRepository.findAll();
	}

	
	
	
	//method which gives all ticket details when customer views his/her tickets
//	@Override
//	public List<Ticket> customerViewsTicket(Long userId) {
//		User user=userRepository.findById(userId).orElseThrow(()-> new CustomException("Invalid user id!! User not present"));
//		
//		List<Ticket> ticket=ticketRepository.findALLByUser(user);
//		
//		if(!ticket.isEmpty())
//			return ticket;
//		else
//			throw new CustomException("No tickets found for the specified user");
//	}
	
	//method which gives all required ticket details when customer views his/her tickets(TicketDetailsDto)
	@Override
	public List<TicketDetailsDto> customerViewsTicket(Long userId) {
		User user=userRepository.findById(userId).orElseThrow(()-> new CustomException("Invalid user id!! User not present"));
		
		List<Ticket> tickets=ticketRepository.findALLByUser(user);
		
		
		
		if(tickets.isEmpty())
			throw new CustomException("No tickets found for the specified user");
		else
			return tickets
					.stream()
					.map(ticket->modelMapper.map(ticket,TicketDetailsDto.class))
					.collect(Collectors.toList());
			
	}
}
