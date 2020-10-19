package com.satsura.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String address;
    private String phone;
    @OneToMany(targetEntity = WorkOrder.class,
            cascade = CascadeType.ALL)
    @JoinColumn (name = "customer_id", referencedColumnName = "id")
    private List<WorkOrder> workOrders;
}
