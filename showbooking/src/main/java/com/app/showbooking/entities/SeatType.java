package com.app.showbooking.entities;

public enum SeatType {
	REGULAR(200), SILVER(250), GOLD(300);
	
	private double seatCost;

	private SeatType(double seatCost) {
		this.seatCost = seatCost;
	}

	public double getSeatCost() {
		return seatCost;
	}

	public void setSeatCost(double seatCost) {
		this.seatCost = seatCost;
	}
	
	
	
}
