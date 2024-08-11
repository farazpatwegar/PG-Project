package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Site_Feedback")
public class SiteFeedback 
{

	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column
	private int sf_id;
	@Column
	private String email;
	@Column
	private String feedback;
	
	public int getSf_id() {
		return sf_id;
	}
	public void setSf_id(int sf_id) {
		this.sf_id = sf_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	@Override
	public String toString() {
		return "SiteFeedback [sf_id=" + sf_id + ", email=" + email + ", feedback=" + feedback + "]";
	}
	public SiteFeedback( String email, String feedback) {
		super();
		this.email = email;
		this.feedback = feedback;
	}
	public SiteFeedback() {
		super();
	}
	
}
