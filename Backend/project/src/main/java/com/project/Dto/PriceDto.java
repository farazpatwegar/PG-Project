package com.project.Dto;

public class PriceDto {

	private String name;
	private int price;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "PriceDto [name=" + name + ", price=" + price + "]";
	}
	public PriceDto(String name, int price) {
		super();
		this.name = name;
		this.price = price;
	}
	public PriceDto() {
		super();
	}
	
	
}
