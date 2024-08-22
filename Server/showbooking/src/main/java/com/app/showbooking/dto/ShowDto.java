package com.app.showbooking.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ShowDto {

	private Long showId;
	
	private LocalDate showDate;

	private LocalTime showTime;

	private Long movie_id;

	private Long screen_id;

}
