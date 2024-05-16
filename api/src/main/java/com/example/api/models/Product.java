package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    private String productType;
    private String productName;
    private String concerns;
    private String productUrl;
    private String keyIngredients;
    private double rating;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "brandId")
    private long brandId;
    @ManyToOne
    @JoinColumn(name = "brandId", insertable = false, updatable = false)
    private Brand brand;


    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getConcerns() {
        return concerns;
    }

    public void setConcerns(String concerns) {
        this.concerns = concerns;
    }

    public String getProductUrl() {
        return productUrl;
    }

    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
    }

    public String getKeyIngredients() {
        return keyIngredients;
    }

    public void setKeyIngredients(String keyIngredients) {
        this.keyIngredients = keyIngredients;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getBrandId() {
        return brandId;
    }

    public void setBrandId(long brandId) {
        this.brandId = brandId;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productType='" + productType + '\'' +
                ", concerns='" + concerns + '\'' +
                ", productUrl='" + productUrl + '\'' +
                ", keyIngredients='" + keyIngredients + '\'' +
                ", rating=" + rating +
                ", id=" + id +
                ", brandId=" + brandId +
                ", brand=" + brand +
                '}';
    }
}
