package com.app.showbooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.showbooking.entities.Screen;

@Repository
public interface ScreenRepository extends JpaRepository<Screen,Long> {

}
