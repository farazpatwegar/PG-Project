package com.project.Dto;

import java.util.List;

import com.project.entities.ChairStatus;

public class ShowChair {

	private int theaterid;
	private int screenid;
	private int userid;
	private List<Integer> chairstatusid;
	
	public ShowChair(int theaterid, int screenid ,int userid,List<Integer> chairstatusid) {
		super();
		
		this.theaterid = theaterid;
		this.userid = userid;
		this.screenid = screenid;
		this.chairstatusid=chairstatusid;
	}
	public ShowChair() {
		super();
	}
	
	public int getTheaterid() {
		return theaterid;
	}
	public void setTheaterid(int theaterid) {
		this.theaterid = theaterid;
	}
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	
	public int getScreenid() {
		return screenid;
	}
	public void setScreenid(int screenid) {
		this.screenid = screenid;
	}
	
	public List<Integer> getChairstatusid() {
		return chairstatusid;
	}
	public void setChairstatusid(List<Integer> chairstatusid) {
		this.chairstatusid = chairstatusid;
	}
	
	@Override
	public String toString() {
		return "ShowChair [theaterid=" + theaterid + ", screenid=" + screenid + ", userid=" + userid
				+ ", chairstatusid=" + chairstatusid + "]";
	}
	
	

}
