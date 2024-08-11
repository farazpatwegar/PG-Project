package com.project.Dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entities.Ticket;

public interface TicketDao extends JpaRepository<Ticket, Integer> {

	@Query(value="select m.name as movieName,m.certification,th.name,s.screen_name,s.time_slot,cs.chair_type,cs.chair_name,t.user_id,t.chair_status_id,p.total_amount,p.payment_mode\r\n"
			+ "from tickets t\r\n"
			+ "inner join Movie_Details md on t.mdetails_id = md.mdetail_id\r\n"
			+ "inner join Movies m on md.movie_id = m.movies_id\r\n"
			+ "inner join theatres th on th.theatre_id = t.theatre_id\r\n"
			+ "inner join screen s on s.screen_id  = t.screen_id\r\n"
			+ "inner join chair_status cs on cs.chair_status_id = t.chair_status_id\r\n"
			+ "inner join payments p on p.payment_id = t.payment_id\r\n"
			+ "where t.payment_id = :paymentid",nativeQuery = true)
	List<Object[]> getTicketById(@Param("paymentid") int paymentid);

	
	@Query(value="select m.name as movieName, md.genre as genre, md.language as langauge, md.format as format, th.name as theatreName, th.city as theatreCity, s.screen_name as screenName, s.time_slot as movieTime, p.date_time, p.total_amount, p.payment_mode\r\n"
			+ "from tickets t \r\n"
			+ "inner join payments p on p.payment_id = t.payment_id\r\n"
			+ "inner join movie_details md on md.mdetail_id = t.mdetails_id\r\n"
			+ "inner join theatres th on t.theatre_id = th.theatre_id\r\n"
			+ "inner join screen s on s.screen_id = t.screen_id\r\n"
			+ "inner join movies m on m.movies_id = md.movie_id\r\n"
			+ "inner join user u on u.user_id = t.user_id\r\n"
			+ "where u.user_id = :userid",nativeQuery = true)
	List<Object[]> getAllBookingHistory(@Param("userid") int userid);

	

}
