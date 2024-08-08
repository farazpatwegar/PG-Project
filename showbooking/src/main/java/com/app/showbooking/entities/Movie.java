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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="movies")
@Getter
@Setter
@ToString
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="movie_id")
	private Long movieId;
	@DateTimeFormat(pattern = "hh:mm:ss")
	private LocalTime duration;
	@Column(length = 200)
	private String description;
	@Column(length = 20)
	private String title;
	
	private  double rating;
	private String language;
	@Column(name="release_date")
	private LocalDate releaseDate;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="user_id",nullable=false)
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
		this.user = user;
	}




}
