package com.project.Dto;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

public class MovieDetailsDto {
	private String name;
	private String description;
	private String certification;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date release_date;
	private String status;
	private String language;
	private String genre;
	private String format;
	private String banner;
	
	public String getBanner() {
		return banner;
	}
	public void setBanner(String banner) {
		this.banner = banner;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCertification() {
		return certification;
	}
	public void setCertification(String certification) {
		this.certification = certification;
	}
	public Date getRelease_date() {
		return release_date;
	}
	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
	public MovieDetailsDto(String name, String description, String certification, Date release_date, String status,
			String language, String genre, String format, String banner) {
		super();
		this.name = name;
		this.description = description;
		this.certification = certification;
		this.release_date = release_date;
		this.status = status;
		this.language = language;
		this.genre = genre;
		this.format = format;
		this.banner = banner;
	}
	public MovieDetailsDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
