package com.project.Dto;

public class ChairAndStatusDto {
	private int chair_status_id;
	private String chair_status;
	public ChairAndStatusDto(int chair_status_id, String chair_status) {
		super();
		this.chair_status_id = chair_status_id;
		this.chair_status = chair_status;
	}
	public ChairAndStatusDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getChair_status_id() {
		return chair_status_id;
	}
	public void setChair_status_id(int chair_status_id) {
		this.chair_status_id = chair_status_id;
	}
	public String getChair_status() {
		return chair_status;
	}
	public void setChair_status(String chair_status) {
		this.chair_status = chair_status;
	}
	@Override
	public String toString() {
		return "ChairAndStatusDto [chair_status_id=" + chair_status_id + ", chair_status=" + chair_status + "]";
	}
	

}
