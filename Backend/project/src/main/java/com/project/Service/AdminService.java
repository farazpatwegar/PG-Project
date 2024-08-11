package com.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.Dao.FeedBackDao;
import com.project.Dao.HomeDao;
import com.project.Dao.UserDao;
import com.project.Dto.Credentials;
import com.project.Dto.UserSignUp;
import com.project.entities.SiteFeedback;
import com.project.entities.User;

@Transactional
@Service
public class AdminService {

	@Autowired
	private HomeDao homedao;
	
	@Autowired
	private FeedBackDao feedbackdao;
	
	@Autowired
	private UserDao userdao;
	

	

	public List<SiteFeedback> findAllFeedbacks() {
		return feedbackdao.findAll();
	}


	public List<Object[]> getManager(int userid) {
		return userdao.getManagerDetails(userid);
	}

	public List<Object[]> getTheatreReview(int theatreId) {
		return homedao.findTheatreReviews(theatreId);	 
	}

	public User findUserByEmail(Credentials cred) {
		User u = userdao.findByEmail(cred.getEmail());
		if(u.getPassword().equals(cred.getPassword()))
		     return u;
		return null;
	}

	//String first_name, String last_name, String address, String contact_no, String email,
	//String password, String role
	public User saveNewUser(UserSignUp user) {
		User u = new User(user.getFirstname(),user.getLastname(),user.getAddress(),user.getMobile(),user.getEmail(),user.getPassword(),"user");
		return userdao.save(u);
	}

	
	
	
	
}
