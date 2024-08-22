package com.app.showbooking.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="screens")
@Getter
@Setter
@ToString
public class Screen {
	
	@Id
	@Column(name="screen_id",unique = true)
	private Long screenId;
	
	@Column(name="total_seats")
	private int totalSeats;
	
	

	public Screen() {
		super();
	}

	public Screen(int totalSeats) {
		super();
		this.totalSeats = totalSeats;
	}

	                                        
	

}
