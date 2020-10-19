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
@Table(name = "Employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String fullName;
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
    private String address;
    private String phone;
    @Column(name = "position_id")
    private int positionId;
    @OneToMany(targetEntity = WorkOrder.class,
            cascade = CascadeType.ALL)
    @JoinColumn (name = "employee_id", referencedColumnName = "id")
    private List<WorkOrder> workOrders;

}
