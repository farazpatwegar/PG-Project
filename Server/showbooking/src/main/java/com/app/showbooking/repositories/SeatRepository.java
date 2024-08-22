package com.app.showbooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.showbooking.entities.Seat;
@Repository
public interface SeatRepository extends JpaRepository<Seat,Long>{

}
