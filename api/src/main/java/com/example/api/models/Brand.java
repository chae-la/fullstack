package com.example.api.models;

import com.example.api.responses.OptionContract;
import jakarta.persistence.*;

@Entity
@Table(name = "brands")
public class Brand implements OptionContract{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String brandName;

    public Brand() {
    }

    public Brand(String brandName) {
        this.brandName = brandName;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    @Override
    public long getId() {
        return 0;
    }

    @Override
    public String getName() {
        return "";
    }
    @Override
    public String toString() {
        return "Brand{" +
                "id=" + id +
                ", brandName='" + brandName + '\'' +
                '}';
    }
}
