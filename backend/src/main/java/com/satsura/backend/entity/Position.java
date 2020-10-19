package com.satsura.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Positions")
public class Position {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private double salary;
    @OneToMany(targetEntity = Employee.class,
            cascade = CascadeType.ALL)
    @JoinColumn (name = "position_id", referencedColumnName = "id")
    private List<Employee> employees;
}
