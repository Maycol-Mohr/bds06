package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private Long movieId;
	private Long userId;
	private String userName;
	private String userEmail;
	
	//private Movie movie;
	
	private User user;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId, String userName, String userEmail, User user) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.user = user;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		userId = entity.getUser().getId();
		userName = entity.getUser().getName();
		userEmail = entity.getUser().getEmail();
		user = entity.getUser();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	

	//public Movie getMovie() {
		//return movie;
	//}

	//public void setMovie(Movie movie) {
		//this.movie = movie;
	//}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}