package com.app.showbooking.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.entities.Contact;
import com.app.showbooking.repositories.ContactRepository;

@Service
@Transactional
public class ContactServiceImpl implements ContactService{

	@Autowired
	private ContactRepository contactRepository;

	@Override
	public List<Contact> getAllContactDetails() {
		
		return contactRepository.findAll();
	}

	@Override
	public Contact addNewContactUsDetails(Contact newContact) {
		
		return contactRepository.save(newContact);
	}
}
