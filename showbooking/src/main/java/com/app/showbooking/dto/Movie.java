package com.app.showbooking.dto;

import java.sql.Time;
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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


public class Movie {

	private Long movieId;
	private LocalTime duration;

	private String description;

	private String title;
	
	private  double rating;
	private String language;

	private LocalDate releaseDate;

	private User user;
	
	

	public Movie() {
		super();
	}



	public Movie(LocalTime duration, String description, String title, double rating, String language,
			LocalDate releaseDate, User user) {
		super();
		this.duration = duration;
		this.description = description;
		this.title = title;
		this.rating = rating;
		this.language = language;
		this.releaseDate = releaseDate;
		this.user=user;
	}




}
