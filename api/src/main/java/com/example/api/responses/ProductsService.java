package com.example.api.responses;

import com.example.api.models.Product;
import com.example.api.repositories.ProductsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductsService {
    @Autowired
    ProductsRepository productsRepository;

    public Product addProduct(Product product){
        Product newProduct = productsRepository.save(product);

        return newProduct;
    }

    public List<Product> getAllProducts(String brandName){
        return new ArrayList<>(productsRepository.getAllByOrderByBrandName());
    }
    public List<Product> getProductsByBrandName(String brandName){
        List<Product> products = productsRepository.getAllProductsByBrandNameIgnoreCase(brandName);
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
        Product updateProduct = productsRepository.save(newProduct);

        return updateProduct;
    }


    //delete
    @Transactional
    public void deleteGreeting(long id){
        if(!productsRepository.existsById(id)){
            throw new NotFoundException("Product Not Found");
        }
        productsRepository.deleteProductById(id);
    }
}
