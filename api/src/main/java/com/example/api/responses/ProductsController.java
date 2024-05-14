package com.example.api.responses;

import com.example.api.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProductsController {
    @Autowired
    private ProductsService productsService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }
    // create
    @PostMapping("/new-product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product newProduct = productsService.addProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(newProduct);
    }

    //read
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) String brandName){
        if(brandName != null){
            return ResponseEntity.status(HttpStatus.OK).body(productsService.getProductsByBrandName(brandName));
        }
        return ResponseEntity.status(HttpStatus.OK).body(productsService.getAllProducts());
    }

    @GetMapping("/product/random")
    public ResponseEntity<Product> getRandomProduct(){
        return ResponseEntity.status(HttpStatus.OK).body(productsService.getRandomProduct());
    }

    @GetMapping("/products/ascending")
    public ResponseEntity<List<Product>> getProductsRatingAscending() {
        return ResponseEntity.status(HttpStatus.OK).body(productsService.getProductsRatingAscending());
    }

    @GetMapping("/products/descending")
    public ResponseEntity<List<Product>> getProductsRatingDescending() {
        return ResponseEntity.status(HttpStatus.OK).body(productsService.getProductsRatingDescending());
    }

    @GetMapping("/products/{type}")
    public ResponseEntity<List<Product>> getProductsByProductType(@PathVariable String type){
        return ResponseEntity.status(HttpStatus.OK).body(productsService.getProductsByProductType(type));
    }

    // UPDATE

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateGreeting(@RequestBody Product newProduct, @PathVariable long id){
        Product updatedProduct = productsService.updateProduct(newProduct, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedProduct);
    }

    //DELETE
    @DeleteMapping("/product/{id}")
    public ResponseEntity<Void> deleteProductById(@PathVariable long id){
        productsService.deleteGreeting(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
