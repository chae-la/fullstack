package com.example.api.repositories;

import com.example.api.models.Brand;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "brands")
@Repository
public interface BrandsRepository extends JpaRepository<Brand, Long> {
}
