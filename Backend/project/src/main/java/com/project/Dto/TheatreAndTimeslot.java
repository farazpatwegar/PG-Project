package com.project.Dto;

import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

public class TheatreAndTimeslot {

	private String theatrename;
	@DateTimeFormat(pattern="hh:mm:ss")
	private LocalTime timeslot;
	
	public TheatreAndTimeslot() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public TheatreAndTimeslot(String theatrename, LocalTime timeslot) {
		super();
		this.theatrename = theatrename;
		this.timeslot = timeslot;
	}

	public String getTheatrename() {
		return theatrename;
	}
	public void setTheatrename(String theatrename) {
		this.theatrename = theatrename;
	}
	public LocalTime getTimeslot() {
		return timeslot;
	}
	public void setTimeslot(LocalTime timeslot) {
		this.timeslot = timeslot;
	}

	@Override
	public String toString() {
		return "TheatreAndTimeslot [theatrename=" + theatrename + ", timeslot=" + timeslot + "]";
	}
	
}
