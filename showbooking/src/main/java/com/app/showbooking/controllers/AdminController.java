package com.app.showbooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.showbooking.dto.SeatDto;
import com.app.showbooking.dto.ShowDto;
import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.Screen;
import com.app.showbooking.entities.Show;
import com.app.showbooking.entities.Ticket;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.services.ContactService;
import com.app.showbooking.services.MovieService;
import com.app.showbooking.services.PaymentService;
import com.app.showbooking.services.ScreenService;
import com.app.showbooking.services.SeatService;
import com.app.showbooking.services.ShowService;
import com.app.showbooking.services.TicketService;
import com.app.showbooking.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private MovieService movieService;

	@Autowired
	private ShowService showService;
	
	@Autowired 
	private ScreenService screenService;
	
	@Autowired
	private SeatService seatService;
	
	@Autowired
	private UserService userService;
	@Autowired
	private ContactService contactService;
	
	@Autowired
	private PaymentService paymentService;
	
	@Autowired
	private TicketService ticketService;

	

	//=========================================Movie CRUD=============================================
	@GetMapping("/getAllMovies")
	public ResponseEntity<?> getAllMovies() {
		try {

			return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
		} catch (CustomException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
	
	
	@PostMapping("/addNewMovie")
	public ResponseEntity<?> addNewMovie(@RequestBody Movie newMovie){
		try {
			return new ResponseEntity<>(movieService.addNewMovie(newMovie),HttpStatus.CREATED);
			
		}
		catch(CustomException e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	@DeleteMapping("/deleteMovie/{movieId}")
	public ResponseEntity<?> deleteMovie(@PathVariable Long movieId){
		try {
			return new ResponseEntity<>(movieService.deleteMovie(movieId), HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/updateMovie/{movieId}")
	public ResponseEntity<?> updateMovie(@PathVariable Long movieId,@RequestBody Movie updMovie){
		try {
			return new ResponseEntity<>(movieService.updateMovie(movieId, updMovie),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getMovieById/{movieId}")
	public ResponseEntity<?> getMovieById(@PathVariable Long movieId){
		try {
			return new ResponseEntity<>(movieService.getMovieById(movieId),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
			
		}
	}
	//=========================================Show CRUD=============================================
	@GetMapping("/getAllShows")
	public ResponseEntity<?> getAllShows(){
		try {
			return new ResponseEntity<>(showService.getAllShows(),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	
//	@PostMapping("/addNewShow")
//	public ResponseEntity<?> addNewShow(@RequestBody Show newShow){
//		try {
//			return new ResponseEntity<>(showService.addNewShow(newShow), HttpStatus.CREATED);
//			
//		}
//		catch(Exception e)
//		{
//			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
	
	@PostMapping("/addNewShow")
	public ResponseEntity<?> addNewShow(@RequestBody ShowDto newShowDto){
		try {
			return new ResponseEntity<>(showService.addNewShow(newShowDto), HttpStatus.CREATED);
			
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@DeleteMapping("/deleteShow/{showId}")
	public ResponseEntity<?> deleteShow(@PathVariable Long showId){
		try {
			return new ResponseEntity<>(showService.deleteShow(showId), HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/updateShow/{showId}")
	public ResponseEntity<?> updateShow(@PathVariable Long showId,@RequestBody ShowDto newShowDto){
		try {
			return new ResponseEntity<>(showService.updateShow(showId, newShowDto),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	
	

	//=========================================Screen CRUD=============================================
	@GetMapping("/getAllScreens")
	public ResponseEntity<?> getAllScreens() {
		try {

			return new ResponseEntity<>(screenService.getAllScreens(), HttpStatus.OK);
		} catch (CustomException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
	
	@PostMapping("/addNewScreen")
	public ResponseEntity<?> addNewScreen(@RequestBody Screen newScreen){
		try {
			return new ResponseEntity<>(screenService.addNewScreen(newScreen),HttpStatus.CREATED);
			
		}
		catch(CustomException e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@DeleteMapping("/deleteScreen/{screenId}")
	public ResponseEntity<?> deleteScreen(@PathVariable Long screenId){
		try {
			return new ResponseEntity<>(screenService.deleteScreen(screenId), HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/updateScreen/{screenId}")
	public ResponseEntity<?> updateScreen(@PathVariable Long screenId,@RequestBody Screen updScreen){
		try {
			return new ResponseEntity<>(screenService.updateScreen(screenId, updScreen),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	

	//=========================================Seat CRUD=============================================
//	@GetMapping("/getAllSeats")
//	public ResponseEntity<?> getAllSeats(){
//		try {
//			return new ResponseEntity<>(seatService.getAllSeats(),HttpStatus.OK);
//		}
//		catch(Exception e) {
//			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
//		}
//	}
//	
//	@PostMapping("/addNewSeat")
//	public ResponseEntity<?> addNewSeat(@RequestBody SeatDto newSeatDto){
//		try {
//			return new ResponseEntity<>(seatService.addNewSeat(newSeatDto), HttpStatus.CREATED);
//			
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//			return new ResponseEntity<>("hello here error"+e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
	
	//=========================================User CRUD=============================================

	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllUsers() {
		try {

			return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
		} catch (CustomException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId){
		try {
			return new ResponseEntity<>(userService.deleteUser(userId), HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
	//addNewUser(register new user) is present in Home Controller
	//updateUser is present in Customer Controller
	
	
	//=========================================Contact CRUD=============================================
	@GetMapping("/getAllContactDetails")
	public ResponseEntity<?> getAllContactDetails() {
		try {

			return new ResponseEntity<>(contactService.getAllContactDetails(), HttpStatus.OK);
		} catch (CustomException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
	
	//addNewContactDetails is present in Customer Controller
	

	//=========================================Payment CRUD=============================================
	@GetMapping("/getAllPayments")
	public ResponseEntity<?> getAllPayments(){
		try {
			return new ResponseEntity<>(paymentService.getAllPayments(),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	
	//addnewpaymentdetails  => in customer controller
	
	

	//=========================================Ticket CRUD=============================================
	@GetMapping("/getAllTickets")
	public ResponseEntity<?> getAllTickets(){
		try {
			return new ResponseEntity<>(ticketService.getAllTickets(),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
}
