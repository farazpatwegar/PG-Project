package com.project.entities;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="Screen")
public class Screen 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int screen_id;
	@Column
	private String screen_name;
	@Column
	@DateTimeFormat(pattern = "hh:mm:ss")
	private LocalTime time_slot;
	
	
	@ManyToOne(fetch = FetchType.LAZY ,cascade = CascadeType.ALL) 
	@JoinColumn(name = "mdetails_id") // FK 
	private MovieDetails moviedetails;
	
	/*
	 * @OneToMany(mappedBy = "screen", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<Ticket> ticketList;
	 * 
	 * @OneToMany(mappedBy = "screen", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<ChairStatus> chairList;
	 */
	
	public int getScreen_id() {
		return screen_id;
	}
	public void setScreen_id(int screen_id) {
		this.screen_id = screen_id;
	}
	public String getScreen_name() {
		return screen_name;
	}
	public void setScreen_name(String screen_name) {
		this.screen_name = screen_name;
	}
	
	public LocalTime getTime_slot() {
		return time_slot;
	}
	public void setTime_slot(LocalTime time_slot) {
		this.time_slot = time_slot;
	}
	
	public MovieDetails getMoviedetails() {
		return moviedetails;
	}
	public void setMoviedetails(MovieDetails moviedetails) {
		this.moviedetails = moviedetails;
	}

	/*
	 * public List<Ticket> getTicketList() { return ticketList; } public void
	 * setTicketList(List<Ticket> ticketList) { this.ticketList = ticketList; }
	 * public List<ChairStatus> getChairList() { return chairList; } public void
	 * setChairList(List<ChairStatus> chairList) { this.chairList = chairList; }
	 */
	@Override
	public String toString() {
		return "Screen [screen_id=" + screen_id + ", screen_name=" + screen_name 
				+  "]";
	}
	
	public Screen() {
		super();
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.chairList = new
		 * ArrayList<ChairStatus>();
		 */
	}
	public Screen(String screen_name, LocalTime time_slot, MovieDetails moviedetails) {
		super();
		this.screen_name = screen_name;
		this.time_slot = time_slot;
		this.moviedetails= moviedetails;
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.chairList = new
		 * ArrayList<ChairStatus>();
		 */
	}
	
}

