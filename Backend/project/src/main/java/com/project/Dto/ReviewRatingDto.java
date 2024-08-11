package com.project.Dto;

public class ReviewRatingDto {

	private int user_id;
	private String reviews;
	private int ratings;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int userid) {
		this.user_id = userid;
	}
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String review) {
		this.reviews = review;
	}
	public int getRatings() {
		return ratings;
	}
	public void setRatings(int rating) {
		this.ratings = rating;
	}
	public ReviewRatingDto(int userid, String review, int rating) {
		super();
		this.user_id = userid;
		this.reviews = review;
		this.ratings = rating;
	}
	public ReviewRatingDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}