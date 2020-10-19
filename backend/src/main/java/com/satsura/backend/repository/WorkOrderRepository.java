package com.satsura.backend.repository;

import com.satsura.backend.entity.WorkOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkOrderRepository extends JpaRepository<WorkOrder, Integer> {
}
