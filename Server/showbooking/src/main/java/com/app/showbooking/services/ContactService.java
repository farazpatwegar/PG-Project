package com.app.showbooking.services;

import java.util.List;

import com.app.showbooking.entities.Contact;

public interface ContactService {

	List<Contact> getAllContactDetails();

	Contact addNewContactUsDetails(Contact newContact);

}
