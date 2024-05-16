package com.example.api.responses;

import com.example.api.models.Brand;
import com.example.api.models.Product;
import com.example.api.repositories.BrandsRepository;
import com.example.api.repositories.ProductsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {
    @Autowired
    ProductsRepository productsRepository;
    @Autowired
    BrandsRepository brandsRepository;

    public Product addProduct(Product product){
        System.out.println(product);
        System.out.println(brandsRepository.findAll());
       Optional<Brand> brandTest = brandsRepository.findAll().stream().filter(b -> b.getBrandName().equalsIgnoreCase(product.getBrand().getBrandName())).findFirst();
         System.out.println(brandTest);
        // Brand brand = brandsRepository.getBrandByBrandNameIgnoreCase(product.getBrand().getName()).orElseThrow(() -> new NotFoundException("Brand Not Found"));
        if(brandTest.isEmpty()){
         Brand newBrand = brandsRepository.save(new Brand(product.getBrand().getBrandName()));
         product.setBrandId(newBrand.getId());
        } else {
        product.setBrandId(brandTest.get().getId());

        }
        System.out.println(product);
        System.out.println(product.getBrandId());
        Product newProduct = productsRepository.save(product);
//        newProduct.setBrand(brand);

        return newProduct;
    }

    public List<Product> getAllProducts(String brandName){
        return new ArrayList<>(productsRepository.getAllByOrderByBrandBrandName());
    }
    public List<Product> getProductsByBrandName(String brandName){
        List<Product> products = productsRepository.getAllProductsByBrandBrandNameIgnoreCase(brandName);
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

        Product updateProduct = productsRepository.save(newProduct);
        updateProduct.setBrand(brand);


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
