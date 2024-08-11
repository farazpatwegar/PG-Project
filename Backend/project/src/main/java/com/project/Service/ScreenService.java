package com.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.Dao.ChairDao;
import com.project.Dao.HomeDao;
import com.project.Dao.MovieDao;
import com.project.Dao.MovieDetailsDao;
import com.project.Dao.ScreenDao;
import com.project.Dao.UserDao;
import com.project.Dto.MovieDetailsDto;
import com.project.Dto.PriceDto;
import com.project.entities.MovieDetails;
import com.project.entities.Movies;

@Transactional
@Service
public class ScreenService {
	@Autowired
	ScreenDao screenDao;
	@Autowired
	ChairDao chairdao;
	@Autowired
	MovieDetailsDao moviedetailsDao;
	@Autowired
	MovieDao movieDao;
	@Autowired
	UserDao userdao;
	@Autowired
	HomeDao homedao;

	public  List<Object[]> findAllByTheatre(int theatreId) {
		 List<Object[]> screenList = screenDao.FindScreenById(theatreId);
		return screenList;
	}

	public Object[] findMovieDetailsById(int movieDetailsId) {
		Object[] movie = moviedetailsDao.getMovieDetailsById(movieDetailsId);
		return movie;
	}
	
	public MovieDetails addMovieDetails(MovieDetailsDto movie) {
		Movies m = movieDao.save(new Movies(movie.getName(),movie.getDescription(),movie.getCertification(),movie.getRelease_date(),movie.getStatus(),movie.getBanner()));
		MovieDetails md = moviedetailsDao.save(new MovieDetails(m,movie.getGenre(),movie.getLanguage(),movie.getFormat()));
		return md;
		
	}


	

	public List<Object[]> getAllTheatredetailsById(int theatremanagerid) {
		return (List<Object[]>) homedao.getTheatresByManagerId(theatremanagerid);
	}

	public List<Object[]> getSeatPriceByScreenId(int screenid) {
		return chairdao.getByscreenId(screenid);
	}

	public List<Object[]> updatePrice(int screenid,PriceDto price) {
		chairdao.updatePriceByscreenId(screenid,price.getName(),price.getPrice());
//		chairdao.updateSilverPriceByscreenId(screenid, price.getSilverprice());
		return chairdao.getByscreenId(screenid);
	}
	

}
