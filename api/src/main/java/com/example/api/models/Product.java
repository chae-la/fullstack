package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    private String productType;
    private String productName;
    private String keyIngredients;
    private String brandName;
    private double rating;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getKeyIngredients() {
        return keyIngredients;
    }

    public void setKeyIngredients(String keyIngredients) {
        this.keyIngredients = keyIngredients;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productType='" + productType + '\'' +
                ", productName='" + productName + '\'' +
                ", keyIngredients='" + keyIngredients + '\'' +
                ", rating=" + rating +
                ", brandName='" + brandName + '\'' +
                ", id=" + id +
                '}';
    }
}
