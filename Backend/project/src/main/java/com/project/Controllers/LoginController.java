package com.project.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.Dto.Credentials;
import com.project.Dto.Response;
import com.project.Dto.UserSignUp;
import com.project.Service.AdminService;
import com.project.entities.User;

@CrossOrigin(origins = "*")
@RestController
public class LoginController {
    @Autowired
	AdminService adminService;
    
	@PostMapping("/user/login")
	public ResponseEntity<?> userLogin(@RequestBody Credentials cred)
	{
		User u = adminService.findUserByEmail(cred);
		if(u == null)
			return Response.error("**User not Found**");
		return Response.success(u);
	}
	
	@PostMapping("/user/signup")
	public ResponseEntity<?> userSignUp(@RequestBody UserSignUp user)
	{
		User u = adminService.saveNewUser(user);
		if(u == null)
			return Response.error("**User cannot be inserted**");
		return Response.success(u);
	}
	
	
}
