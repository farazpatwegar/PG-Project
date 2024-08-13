package com.app.showbooking.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="shows")
@Getter
@Setter
@ToString
public class Show {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="show_id")
	private Long showId;
	
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name="show_date",nullable = false)
	private LocalDate showDate;
	
	@DateTimeFormat(pattern = "hh:mm:ss")
	@Column(name="show_time")
	private LocalTime showTime;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="movie_id",nullable = false)
	private Movie movie;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="screen_id",nullable = false)
	private Screen screen;

	
	public Show() {
		super();
	}




	public Show(LocalDate showDate, LocalTime showTime, Movie movie, Screen screen) {
		super();
		this.showDate = showDate;
		this.showTime = showTime;
		this.movie = movie;
		this.screen = screen;
	}

	


}
