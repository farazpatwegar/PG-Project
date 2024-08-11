package com.project.Dto;

public class EmailFeedbackDto {
private String email;
private String feedback;
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
public EmailFeedbackDto(String email, String feedback) {
	super();
	this.email = email;
	this.feedback = feedback;
}
public EmailFeedbackDto() {
	super();
	// TODO Auto-generated constructor stub
}

}