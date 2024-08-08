package com.app.showbooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.showbooking.entities.User;

public interface AdminRepository extends JpaRepository<User, Long> {

}
