package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_type")
public class Product {
    private String productType;
    private String[] concerns;
    private String monthUsed;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

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

    public String getMonthUsed() {
        return monthUsed;
    }

    public void setMonthUsed(String monthUsed) {
        this.monthUsed = monthUsed;
    }
}
