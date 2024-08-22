package com.app.showbooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.showbooking.entities.Contact;
@Repository
public interface ContactRepository extends JpaRepository<Contact,Long> {

}
