package com.project.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Dto.MovieDetailsDto;
import com.project.Dto.PriceDto;
import com.project.Dto.Response;
import com.project.Dto.UpdateAdmin;
import com.project.Service.AdminService;
import com.project.Service.HomeService;
import com.project.Service.ScreenService;
import com.project.entities.MovieDetails;
import com.project.entities.SiteFeedback;
import com.project.entities.User;
@CrossOrigin(origins = "*")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;
	@Autowired
	private HomeService homeService;
	@Autowired
	private ScreenService screenService;

	
	@GetMapping("/manager/viewscreens/{theatreId}")
	public ResponseEntity<?> ViewScreenList(@PathVariable int theatreId) {
		 List<Object[]> screenList = screenService.findAllByTheatre(theatreId);
		if(screenList == null)
			return Response.error("**Screen list is empty**");
		return Response.success(screenList);
	}

	@GetMapping("/manager/viewmoviedetails/{movieDetailsId}")
	public ResponseEntity<?> ViewMovieDetails(@PathVariable int movieDetailsId) {
		Object[] movie = screenService.findMovieDetailsById(movieDetailsId);
		if(movie == null)
			return Response.error("**Cannot find movie details**");
		return Response.success(movie);
	}

	@PostMapping("/manager/addnewmoviedetails")
	public ResponseEntity<?> AddNewMovieDetails(@RequestBody MovieDetailsDto movie) {
		
		MovieDetails moviedetails = screenService.addMovieDetails(movie);
		if(moviedetails == null)
			return Response.error("**movie not added**");
		return Response.success(moviedetails);
	}
	
	
	
		

	
	@GetMapping("/manager/viewchairprice/{screenid}")
	public ResponseEntity<?> ViewChairPrice(@PathVariable int screenid)
	{
		List<Object[]> priceandtype = screenService.getSeatPriceByScreenId(screenid);
		if(priceandtype == null) 
			return Response.error("**NO price details**");
		return Response.success(priceandtype);
	}
	
	@PutMapping("/manager/updatechairprice/{screenid}")
	public ResponseEntity<?> UpdateChairPrice(@PathVariable int screenid,@RequestBody PriceDto price)
	{
		List<Object[]> priceandtype = screenService.updatePrice(screenid,price);
		if(priceandtype == null) 
			return Response.error("**Price details not updated**");
		return Response.success(priceandtype);
	}
		
	
	
	@GetMapping("/admin/viewfeedback")
	public ResponseEntity<?> viewFeedback()
	{
		List<SiteFeedback> feedbackList = adminService.findAllFeedbacks();
		if(feedbackList == null)
			return Response.error("**Feedback list is empty**");
		return Response.success(feedbackList);
	}
	
	
	@GetMapping("/admin/viewmanagerdetails/{userid}")
	public ResponseEntity<?> viewTheaterManagerDetails(@PathVariable int userid)
	{
		List<Object[]> u=adminService.getManager(userid);
		if(u == null)
			return Response.error("**Manager not found**");
		return Response.success(u);
	}
	

	

	
	@PutMapping("/admin/updateuser/{userId}")
	public ResponseEntity<?> updateUserProfile(@PathVariable int userId,@RequestBody UpdateAdmin user)
	{
		User us=homeService.updateUser(userId,user);
		if(us == null)
			return Response.error("**User not updated**");
		return Response.success(us);
	}
	
	
}
