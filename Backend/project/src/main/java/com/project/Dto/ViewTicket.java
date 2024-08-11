package com.project.Dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class ViewTicket {

	private String moviename;
	private String theatername;
	private LocalDate date;
	private LocalTime time;
	private List<String> seats;
	private int screenid;
	private double totalamt;
	public ViewTicket() {
		super();
	}
	public ViewTicket(String moviename, String theatername, LocalDate date, LocalTime time, List<String> seats,
			int screenid, double totalamt) {
		super();
		this.moviename = moviename;
		this.theatername = theatername;
		this.date = date;
		this.time = time;
		this.seats = seats;
		this.screenid = screenid;
		this.totalamt = totalamt;
	}
	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}
	public String getTheatername() {
		return theatername;
	}
	public void setTheatername(String theatername) {
		this.theatername = theatername;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	public List<String> getSeats() {
		return seats;
	}
	public void setSeats(List<String> seats) {
		this.seats = seats;
	}
	public int getScreenid() {
		return screenid;
	}
	public void setScreenid(int screenid) {
		this.screenid = screenid;
	}
	public double getTotalamt() {
		return totalamt;
	}
	public void setTotalamt(double totalamt) {
		this.totalamt = totalamt;
	}
	@Override
	public String toString() {
		return "ViewTicket [moviename=" + moviename + ", theatername=" + theatername + ", date=" + date + ", time="
				+ time + ", seats=" + seats + ", screenid=" + screenid + ", totalamt=" + totalamt + "]";
	}
	
}
