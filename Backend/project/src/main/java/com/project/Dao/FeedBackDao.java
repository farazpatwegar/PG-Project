package com.project.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.SiteFeedback;

public interface FeedBackDao extends JpaRepository<SiteFeedback, Integer>{

}
