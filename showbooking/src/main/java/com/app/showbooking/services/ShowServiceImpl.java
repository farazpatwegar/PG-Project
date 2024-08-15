package com.app.showbooking.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.showbooking.dto.ShowDto;
import com.app.showbooking.entities.Movie;
import com.app.showbooking.entities.Screen;
import com.app.showbooking.entities.Show;
import com.app.showbooking.exceptions.CustomException;
import com.app.showbooking.repositories.MovieRepository;
import com.app.showbooking.repositories.ScreenRepository;
import com.app.showbooking.repositories.ShowRepository;

@Service
@Transactional
public class ShowServiceImpl implements ShowService {

	@Autowired
	private ShowRepository showRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private ScreenRepository screenRepository;

	@Override
	public List<ShowDto> getAllShows() {

		return showRepository.findAll()// List<Show>
				.stream()// Stream<Show>
				.map(Show -> modelMapper.map(Show, ShowDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ShowDto addNewShow(ShowDto showDto) {

		Movie movie = movieRepository.findById(showDto.getMovie_id())
				.orElseThrow(() -> new CustomException("Movie not found!! Invalid movie id"));
		Screen screen = screenRepository.findById(showDto.getScreen_id())
				.orElseThrow(() -> new CustomException("Screen Not found!! Invalid screen id"));

		Show show = modelMapper.map(showDto, Show.class);

		// no need to add this if we have kept MatchingStratergies.LOOSE for modelmapper
		// in DempApplicatio class
		/*
		 * Show entity contains a reference to Movie and Screen entities, rather than
		 * directly storing movie_id and screen_id as Long values. When converting from
		 * ShowDto to Show, ModelMapper does not automatically resolve these entity
		 * references. so we have to do it manually
		 */
//		show.setMovie(movie);
//		show.setScreen(screen);

		Show savedShow = showRepository.save(show);

		ShowDto savedShowDto = modelMapper.map(savedShow, ShowDto.class);

//		savedShowDto.setMovie_id(movie.getMovieId());//no need to add this if we have kept MatchingStratergies.LOOSE for modelmapper in DempApplicatio class
//		savedShowDto.setScreen_id(screen.getScreenId());

		return savedShowDto;
	}

	@Override
	public ShowDto deleteShow(Long showId) {
		Show show = showRepository.findById(showId).orElseThrow(() -> new CustomException("Invalid show Id"));

		showRepository.deleteById(showId);
		return modelMapper.map(show, ShowDto.class);
	}

	@Override
	public ShowDto updateShow(Long showId, ShowDto newShowDto) {
		Show show = showRepository.findById(showId).orElseThrow(() -> new CustomException("Invalid show Id"));
		
		Movie movie=movieRepository.findById(newShowDto.getMovie_id()).orElseThrow(()->new CustomException("Invalid movie id"));		

		Screen screen=screenRepository.findById(newShowDto.getScreen_id()).orElseThrow(()->new CustomException("Invalid screen id"));
		
		newShowDto.setShowId(showId);
		Show updatedShow=modelMapper.map(newShowDto, Show.class);
		

	 	Show savedShow=showRepository.save(updatedShow);
		return modelMapper.map(savedShow, ShowDto.class);
	}

}
