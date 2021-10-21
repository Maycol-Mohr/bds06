package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.NewMovieDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;


@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository; 
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Pageable pageable) {
		Page<Movie> list = repository.findAll(pageable);
		return list.map(x -> new MovieDTO(x));
	}
	
	//@Transactional(readOnly = true)
	//public Page<NewMovieDTO> movieByGenre(Pageable pageable) {
		//Page<Movie> list = repository.findAll(pageable);
		//return list.map(x -> new NewMovieDTO(x));
	//}
	
	public List<NewMovieDTO> findByGenre() {
		List<Movie> list = repository.findAll(Sort.by("genre"));
		return list.stream().map(x -> new NewMovieDTO(x)).collect(Collectors.toList());
	}
	
	//public Page<NewMovieReviewDTO> findMovieReviews() {
		//Page<Movie> page = repository.findAll());
		//return list.map(x -> new NewMovieReviewDTO(x));
	//}
	
	//public List<NewMovieDTO> findAll() {
		//List<Movie> list = repository.findAll(Sort.by("genre"));
		//return list.stream().map(x -> new NewMovieDTO(x)).collect(Collectors.toList());
	//}
	
	//public Page<NewMovieDTO> movieByGenre() {
		//	Page<Movie> list = repository.findAll(Sort.by("genre"));
			//return list.stream().map(x -> new NewMovieDTO(x)).collect(Collectors.toList());
		//}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}
}