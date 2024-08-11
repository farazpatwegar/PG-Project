package com.project.entities;

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

@Entity
@Table(name="Chair_Status")
public class ChairStatus 
{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column	
	private int chair_status_id;
	@Column
	private String chair_type;
	@Column
	private double price;
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "screen_id") // FK
	private Screen screen ;
	@Column
	private String chair_name;
	@Column
	private String chair_status;
	
	
	public int getChair_status_id() {
		return chair_status_id;
	}
	public void setChair_status_id(int chair_status_id) {
		this.chair_status_id = chair_status_id;
	}
	public String getChair_type() {
		return chair_type;
	}
	public void setChair_type(String chair_type) {
		this.chair_type = chair_type;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getChair_name() {
		return chair_name;
	}
	public void setChair_name(String chair_name) {
		this.chair_name = chair_name;
	}
	public String getChair_status() {
		return chair_status;
	}
	public void setChair_status(String chair_status) {
		this.chair_status = chair_status;
	}
	
	public Screen getScreen() {
		return screen;
	}
	public void setScreen(Screen screen) {
		this.screen = screen;
	}
	
	
	@Override
	public String toString() {
		return "ChairStatus [chair_status_id=" + chair_status_id + ", chair_type=" + chair_type + ", price=" + price
				+ ", screen=" + screen + ", chair_name=" + chair_name + ", chair_status=" + chair_status + "]";
	}
	
	public ChairStatus(int chair_status_id, String chair_type, double price, Screen screen, String chair_name,
			String chair_status) {
		super();
		this.chair_status_id = chair_status_id;
		this.chair_type = chair_type;
		this.price = price;
		this.screen = screen;
		this.chair_name = chair_name;
		this.chair_status = chair_status;
	}
	public ChairStatus() {
		super();
	}
	

}
