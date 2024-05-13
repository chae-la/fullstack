package com.example.api.repositories;

import com.example.api.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductsRepository extends JpaRepository<Product, Long> {
    List<Product> getAllOrderByBrandName();
    List<Product> getProductsByBrandNameIgnoreCase(String brandName);


    @Query(value = "Select * FROM skincare_products ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Product getRandomProduct();

    @Query(value = "SELECT * FROM skincare_products ORDER BY rating DESC", nativeQuery = true)
    List<Product> getAllProductsOrderByRatingDesc();

    @Query(value = "SELECT * FROM skincare_products ORDER BY rating ASC", nativeQuery = true)
    List<Product> getAllProductsOrderByRatingAsc();

    void deleteProduct(long id);
}
