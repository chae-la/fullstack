package com.example.api.responses;

import com.example.api.models.Brand;
import com.example.api.models.Product;
import com.example.api.models.Rating;
import com.example.api.repositories.BrandsRepository;
import com.example.api.repositories.ProductsRepository;
import com.example.api.repositories.RatingsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductsService {
    @Autowired
    ProductsRepository productsRepository;
    @Autowired
    BrandsRepository brandsRepository;
    @Autowired
    RatingsRepository ratingsRepository;

    public Product addProduct(Product product){
        Brand brand = brandsRepository.findById(product.getBrandId()).orElseThrow(() -> new NotFoundException("Brand Not Found"));
        Rating rating = ratingsRepository.findById(product.getRatingId()).orElseThrow(() -> new NotFoundException("Rating Not Found"));

        Product newProduct = productsRepository.save(product);
         newProduct.setBrandId(brand);
        newProduct.setRatingId(rating);
        return newProduct;
    }

    public List<Product> getAllProducts(){
        return new ArrayList<>(productsRepository.getAllOrderByBrandName());
    }
    public List<Product> getProductsByBrandName(String brandName){
        List<Product> products = productsRepository.getProductsByBrandNameIgnoreCase(brandName);
        return products
                .stream()
                .toList();
    }

    public Product getRandomProduct(){
        return productsRepository.getRandomProduct();
    }

    public List<Product> getProductsRatingAscending(){
        return productsRepository.getAllProductsOrderByRatingAsc();
    }
    public List<Product> getProductsRatingDescending(){
        return productsRepository.getAllProductsOrderByRatingDesc();
    }

    public List<Product> getProductsByProductType(String productType){
    return productsRepository.getProductsByProductType(productType);
    }



    //update
    @Modifying
    public Product updateProduct(Product newProduct, long id){
        if(!productsRepository.existsById(id)){
            throw new NotFoundException("Product Not Found");
        }
        Brand brand = brandsRepository.findById(newProduct.getBrandId()).orElseThrow(() -> new NotFoundException("Brand Not Found"));
        Rating rating = ratingsRepository.findById(newProduct.getRatingId()).orElseThrow(() -> new NotFoundException("Rating Not Found"));

        Product updateProduct = productsRepository.save(newProduct);
        updateProduct.setBrandId(brand);
        updateProduct.setRatingId(rating);

        return updateProduct;
    }


    //delete
    @Transactional
    public void deleteGreeting(long id){
        if(!productsRepository.existsById(id)){
            throw new NotFoundException("Product Not Found");
        }
        productsRepository.deleteProduct(id);
    }
}
