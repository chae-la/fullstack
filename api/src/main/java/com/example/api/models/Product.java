package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_type")
public class Product {
    private String productType;
    private String[] concerns;
    private String productUrl;
    private String[] keyIngredients;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "brand_id")
    private long brandId;
    @ManyToMany
    @JoinColumn(name = "brand_id", insertable = false, updatable = false)
    private Brand brand;

    @Column(name = "rating_id")
    private long ratingId;
    @ManyToOne
    @JoinColumn(name = "rating_id", insertable = false, updatable = false)
    private Rating rating;

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String[] getConcerns() {
        return concerns;
    }

    public void setConcerns(String[] concerns) {
        this.concerns = concerns;
    }

    public String[] getKeyIngredients() {
        return keyIngredients;
    }

    public void setKeyIngredients(String[] keyIngredients) {
        this.keyIngredients = keyIngredients;
    }

    public long getBrandId() {
        return brandId;
    }

    public void setBrandId(long brandId) {
        this.brandId = brandId;
    }

    public long getRatingId() {
        return ratingId;
    }

    public void setRatingId(long ratingId) {
        this.ratingId = ratingId;
    }

    public String getProductUrl() {
        return productUrl;
    }

    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
    }
}
