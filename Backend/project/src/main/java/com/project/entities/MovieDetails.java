package com.project.entities;

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

@Entity
@Table(name="Movie_Details")
public class MovieDetails 
{
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column
	private int mdetail_id;
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "movie_id") // FK 
	private Movies movie;
	@Column
	private String genre;
	@Column
	private String language;
	@Column
	private String format;
	/*
	 * @OneToMany(mappedBy = "mdetails", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<Ticket> ticketList;
	 * 
	 * @OneToMany(mappedBy = "moviedetails", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<Screen> screenList;
	 */
	
	public int getMdetails_id() {
		return mdetail_id;
	}
	public void setMdetails_id(int mdetails_id) {
		this.mdetail_id = mdetails_id;
	}
	public Movies getMovie() {
		return movie;
	}
	public void setMovie(Movies movie) {
		this.movie = movie;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
	
	public int getMdetail_id() {
		return mdetail_id;
	}
	public void setMdetail_id(int mdetail_id) {
		this.mdetail_id = mdetail_id;
	}

	/*
	 * public List<Ticket> getTicketList() { return ticketList; } public void
	 * setTicketList(List<Ticket> ticketList) { this.ticketList = ticketList; }
	 * 
	 * public List<Screen> getScreenList() { return screenList; } public void
	 * setScreenList(List<Screen> screenList) { this.screenList = screenList; }
	 */
	@Override
	public String toString() {
		return "MovieDetails [mdetails_id=" + mdetail_id + ", genre=" + genre
				+ ", language=" + language + ", format=" + format + "]";
	}
	public MovieDetails(int mdetail_id, String genre, String language, String format) {
		super();
		this.mdetail_id = mdetail_id;
		this.genre = genre;
		this.language = language;
		this.format = format;
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.screenList = new
		 * ArrayList<Screen>();
		 */
	}
	
	public MovieDetails( Movies movie, String genre, String language, String format) {
		super();
		
		this.movie = movie;
		this.genre = genre;
		this.language = language;
		this.format = format;
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.screenList = new
		 * ArrayList<Screen>();
		 */
	}
	public MovieDetails() {
		super();
//		this.ticketList = new ArrayList<Ticket>();
//		this.screenList = new ArrayList<Screen>();
	}
	
}
