package com.app.showbooking.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


public class Screen {
	

	private Long screenId;

	private int totalSeats;
	
	

	public Screen() {
		super();
	}

	public Screen(int totalSeats) {
		super();
		this.totalSeats = totalSeats;
	}

	                                        
	

}
