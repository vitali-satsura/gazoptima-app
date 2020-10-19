package com.satsura.backend.controller;

import com.satsura.backend.entity.Customer;
import com.satsura.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class CustomerController {

    @Autowired
    private CustomerService service;

    @PostMapping("/addCustomer")
    public Customer addEmployee(@RequestBody Customer customer) {
        return service.saveCustomer(customer);
    }

    @PostMapping("/addCustomers")
    public List<Customer> addCustomers(@RequestBody List<Customer> customers) {
        return service.saveCustomers(customers);
    }

    @GetMapping("/customers")
    public List<Customer> findAllCustomers() {
        return service.getCustomers();
    }

    @GetMapping("/customerById/{id}")
    public Customer findCustomerById(@PathVariable int id) {
        return service.getCustomerById(id);
    }

    @PutMapping("/updateCustomer")
    public Customer updateEmployee(@RequestBody Customer customer) {
        return service.updateCustomer(customer);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public String deleteCustomer(@PathVariable int id) {
        return service.deleteCustomer(id);
    }
}
