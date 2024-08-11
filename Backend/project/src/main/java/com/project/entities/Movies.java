package com.project.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="Movies")
public class Movies 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int movies_id;
	@Column
	private String name;
	@Column
	private String description;
	@Column
	private String certification;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date release_date;
	@Column
	private String status;
	@Column
	private String banner;
	/*
	 * @OneToMany(mappedBy = "movie", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<MovieReviewRating> mrrList;
	 * 
	 * @OneToMany(mappedBy = "movie", fetch = FetchType.LAZY, cascade =
	 * {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name private
	 * List<MovieDetails> mdList;
	 */
	
	public int getMovie_id() {
		return movies_id;
	}
	public void setMovie_id(int movie_id) {
		this.movies_id = movie_id;
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

	/*
	 * public List<MovieReviewRating> getMrrList() { return mrrList; } public void
	 * setMrrList(List<MovieReviewRating> mrrList) { this.mrrList = mrrList; }
	 * 
	 * public List<MovieDetails> getMdList() { return mdList; } public void
	 * setMdList(List<MovieDetails> mdList) { this.mdList = mdList; }
	 */
	
	public String getBanner() {
		return banner;
	}
	public void setBanner(String banner) {
		this.banner = banner;
	}
	@Override
	public String toString() {
		return "Movies [movie_id=" + movies_id + ", name=" + name + ", description=" + description + ", certification="
				+ certification + ", release_date=" + release_date + ", status=" + status +"banner="+banner+ "]";
	}
	public Movies( String name, String description, String certification, Date release_date,
			String status,String banner) {
		super();
		this.name = name;
		this.description = description;
		this.certification = certification;
		this.release_date = release_date;
		this.status = status;
		this.banner=banner;
		/*
		 * this.mrrList = new ArrayList<MovieReviewRating>(); this.mdList = new
		 * ArrayList<MovieDetails>();
		 */
	}
	public Movies() {
		super();
		/*
		 * this.mrrList = new ArrayList<MovieReviewRating>(); this.mdList = new
		 * ArrayList<MovieDetails>();
		 */
	}
	
	
}
