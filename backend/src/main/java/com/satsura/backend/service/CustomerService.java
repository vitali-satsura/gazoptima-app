package com.satsura.backend.service;

import com.satsura.backend.entity.Customer;
import com.satsura.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    public Customer saveCustomer(Customer customer) {
        return repository.save(customer);
    }

    public List<Customer> saveCustomers(List<Customer> customers) {
        return repository.saveAll(customers);
    }

    public List<Customer> getCustomers() {
        return repository.findAll();
    }

    public Customer getCustomerById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteCustomer(int id) {
        repository.deleteById(id);
        return "Customer removed !!!" + id;
    }

    public Customer updateCustomer(Customer customer) {
        Customer existingCustomer = repository.findById(customer.getId()).orElse(null);
        existingCustomer.setName(customer.getName());
        existingCustomer.setAddress(customer.getAddress());
        existingCustomer.setPhone(customer.getPhone());
        return repository.save(existingCustomer);
    }
}
