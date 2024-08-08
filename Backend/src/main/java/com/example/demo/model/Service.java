package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eventType;
    private String beverages;
    private String ageGroup;
    private String venue;
    private String gender;
    private String contactNo;
    private String eventDate;

    @OneToOne
    @JoinColumn(name = "payment_id") // Foreign key column in the Service table
    private Payment payment;
}
