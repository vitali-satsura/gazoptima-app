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
@Table(name = "TypeOfWorks")
public class TypeOfWork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(targetEntity = WorkOrder.class,
            cascade = CascadeType.ALL)
    @JoinColumn (name = "type_of_works_id", referencedColumnName = "id")
    private List<WorkOrder> workOrders;

}
