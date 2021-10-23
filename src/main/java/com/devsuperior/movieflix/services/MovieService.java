package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.NewMovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;


@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository; 
	
	
	@Autowired
	private GenreRepository genreRepository;
	
	
	//este é correto desmarcar
	
	
	@Transactional(readOnly = true)
	public Page<NewMovieDTO> findAllPaged(Long genreId, Pageable pageable) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> list = repository.find(genre, pageable);
		return list.map(x -> new NewMovieDTO(x));
	}
	
	
	
	
	//public List<NewMovieDTO> findAll() {
		//List<Movie> list = repository.findAll(Sort.by("title"));
		//return list.stream().map(x -> new NewMovieDTO(x)).collect(Collectors.toList());
	//}
	
	/*
	@Transactional(readOnly = true)
	public Page<NewMovieDTO> findAllPagedGenre(Pageable pageable) {
		Page<Movie> list = repository.findAll(pageable);
		return list.map(x -> new NewMovieDTO(x));
	}*/
	
	
	
	//@Transactional(readOnly = true)
	//public Page<NewMovieDTO> movieByGenre(Pageable pageable) {
		//Page<Movie> list = repository.findAll(pageable);
		//return list.map(x -> new NewMovieDTO(x));
	//}
	
	//public List<NewMovieDTO> findByGenre() {
		//List<Movie> list = repository.findAll(Sort.by("genre"));
		//return list.stream().map(x -> new NewMovieDTO(x)).collect(Collectors.toList());
	//}
	
	
	//@Transactional(readOnly = true)
	//public Page<NewMovieDTO> findAllPaged(Long genreId, Pageable pageable) {
		//List<Genre> categories = (categoryId == 0) ? null : Arrays.asList(categoryRepository.getOne(categoryId));
		//Page<Movie> page = repository.find(categories, name, pageable);
		//repository.findProductsWithCategories(page.getContent());
		//return page.map(x -> new NewMovieDTO(x, x.getCategories()));
	//}
	
	
	//@Transactional(readOnly = true)
	//public Page<NewMovieDTO> findMovieByGenre(Pageable pageable) {
		//Page<Movie> list = repository.findAll(pageable);
	//	return list.map(x -> new NewMovieDTO(x));
	//}
	
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