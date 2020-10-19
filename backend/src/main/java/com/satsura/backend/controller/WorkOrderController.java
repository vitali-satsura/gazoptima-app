package com.satsura.backend.controller;

import com.satsura.backend.entity.WorkOrder;
import com.satsura.backend.service.WorkOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class WorkOrderController {

    @Autowired
    private WorkOrderService service;

    @PostMapping("/addWorkOrder")
    public WorkOrder addWorkOrder(@RequestBody WorkOrder workOrder) {
        return service.saveWorkOrder(workOrder);
    }

    @PostMapping("/addWorkOrders")
    public List<WorkOrder> addWorkOrders(@RequestBody List<WorkOrder> workOrders) {
        return service.saveWorkOrders(workOrders);
    }

    @GetMapping("/workOrders")
    public List<WorkOrder> findAllWorkOrders() {
        return service.getWorkOrders();
    }

    @GetMapping("/workOrderById/{id}")
    public WorkOrder findWorkOrderById(@PathVariable int id) {
        return service.getWorkOrderById(id);
    }

    @PutMapping("/updateWorkOrder")
    public WorkOrder updateWorkOrder(@RequestBody WorkOrder workOrder) {
        return service.updateWorkOrder(workOrder);
    }

    @DeleteMapping("/deleteWorkOrder/{id}")
    public String deleteWorkOrder(@PathVariable int id) {
        return service.deleteWorkOrder(id);
    }
}
