package com.satsura.backend.service;

import com.satsura.backend.entity.WorkOrder;
import com.satsura.backend.repository.WorkOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkOrderService {

    @Autowired
    private WorkOrderRepository repository;

    public WorkOrder saveWorkOrder(WorkOrder workOrder) {
        return repository.save(workOrder);
    }

    public List<WorkOrder> saveWorkOrders(List<WorkOrder> workOrders) {
        return repository.saveAll(workOrders);
    }

    public List<WorkOrder> getWorkOrders() {
        return repository.findAll();
    }

    public WorkOrder getWorkOrderById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteWorkOrder(int id) {
        repository.deleteById(id);
        return "Work Order removed !!!" + id;
    }

    public WorkOrder updateWorkOrder(WorkOrder workOrder) {
        WorkOrder existingWorkOrder = repository.findById(workOrder.getId()).orElse(null);
        existingWorkOrder.setTypeOfWorkId(workOrder.getTypeOfWorkId());
        existingWorkOrder.setCustomerId(workOrder.getCustomerId());
        existingWorkOrder.setEmployeeId(workOrder.getEmployeeId());
        existingWorkOrder.setStartDate(workOrder.getStartDate());
        existingWorkOrder.setEndDate(workOrder.getEndDate());
        existingWorkOrder.setPrice(workOrder.getPrice());
        return repository.save(existingWorkOrder);
    }
}
