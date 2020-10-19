package com.satsura.backend.service;

import com.satsura.backend.entity.Employee;
import com.satsura.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> saveEmployees(List<Employee> employees) {
        return repository.saveAll(employees);
    }

    public List<Employee> getEmployees() {
        return repository.findAll();
    }

    public Employee getEmployeeById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteEmployee(int id) {
        repository.deleteById(id);
        return "Employee removed !!!" + id;
    }

    public Employee updateEmployee(Employee employee) {
        Employee existingEmployee = repository.findById(employee.getId()).orElse(null);
        existingEmployee.setFullName(employee.getFullName());
        existingEmployee.setDateOfBirth(employee.getDateOfBirth());
        existingEmployee.setAddress(employee.getAddress());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setPositionId(employee.getPositionId());
        return repository.save(existingEmployee);
    }
}
