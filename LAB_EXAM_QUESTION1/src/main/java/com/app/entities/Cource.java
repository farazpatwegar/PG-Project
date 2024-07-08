package com.app.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Cource {
	
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long id;
	    
	    @Column(unique = true)
	    private String title;
	    
	    private LocalDate startDate;
	    private LocalDate endDate;
	    private double fees;
	    private int minScore;
	   
	    
	    public Cource() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Cource(long id) {
	    	super();
	    	this.id=id;
	    }
	    
	    public Cource(String title, LocalDate startDate, LocalDate endDate, double fees, int minScore) {
			super();
			
			this.title = title;
			this.startDate = startDate;
			this.endDate = endDate;
			this.fees = fees;
			this.minScore = minScore;
		}
		@Override
		public String toString() {
			return "Cource [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
					+ ", fees=" + fees + ", minScore=" + minScore + "]";
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public LocalDate getStartDate() {
			return startDate;
		}
		public void setStartDate(LocalDate startDate) {
			this.startDate = startDate;
		}
		public LocalDate getEndDate() {
			return endDate;
		}
		public void setEndDate(LocalDate endDate) {
			this.endDate = endDate;
		}
		public double getFees() {
			return fees;
		}
		public void setFees(double fees) {
			this.fees = fees;
		}
		public int getMinScore() {
			return minScore;
		}
		public void setMinScore(int minScore) {
			this.minScore = minScore;
		}
		
	   
}

