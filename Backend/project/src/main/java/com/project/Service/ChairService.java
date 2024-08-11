package com.project.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.Dao.ChairDao;
import com.project.Dto.ChairAndStatusDto;
import com.project.Dto.ShowChair;
import com.project.entities.ChairStatus;

@Transactional
@Service
public class ChairService {

	@Autowired
	private ChairDao chairdao;

	public List<Object[]> showSeats(int screenid) {
		return chairdao.findAllChairsById(screenid);
	}

	public Double showPriceForSelectedSeats(int movieid, ShowChair showchair) {
		int screenid=showchair.getScreenid();
		List<Integer> chairstatusid=showchair.getChairstatusid();
		System.out.println(showchair.toString());
		double sum=0;
		for(int id:chairstatusid)
		{
			System.out.println(id);
			int i=id;	
			sum=sum+chairdao.findAllById(screenid,i);
			System.out.println(sum);
		}
		return sum;
	}
	
	public void updateChairStatus(int chairid)
	{
	    chairdao.updateChairStatus(chairid);	
	}
}
