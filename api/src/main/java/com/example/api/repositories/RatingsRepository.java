package com.example.api.repositories;

import com.example.api.models.Rating;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "ratings")
@Repository
public interface RatingsRepository extends JpaRepository<Rating, Long> {
}
