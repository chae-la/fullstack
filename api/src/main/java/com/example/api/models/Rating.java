package com.example.api.models;

import com.example.api.responses.OptionContract;
import jakarta.persistence.*;

@Entity
@Table(name = "ratings")
public class Rating  implements OptionContract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double rating;

    public void setId(long id) {
        this.id = id;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
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
        return "Rating{" +
                "id=" + id +
                ", rating=" + rating +
                '}';
    }
}
