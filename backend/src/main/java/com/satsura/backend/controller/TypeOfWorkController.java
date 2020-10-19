package com.satsura.backend.controller;

import com.satsura.backend.entity.TypeOfWork;
import com.satsura.backend.service.TypeOfWorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class TypeOfWorkController {

    @Autowired
    private TypeOfWorkService service;

    @PostMapping("/addTypeOfWork")
    public TypeOfWork addTypeOfWork(@RequestBody TypeOfWork typeOfWork) {
        return service.saveTypeOfWork(typeOfWork);
    }

    @PostMapping("/addTypeOfWorks")
    public List<TypeOfWork> addTypeOfWorks(@RequestBody List<TypeOfWork> typeOfWorks) {
        return service.saveTypeOfWorks(typeOfWorks);
    }

    @GetMapping("/typeOfWorks")
    public List<TypeOfWork> findAllTypeOfWorks() {
        return service.getTypeOfWorks();
    }

    @GetMapping("/typeOfWorkById/{id}")
    public TypeOfWork findTypeOfWorkById(@PathVariable int id) {
        return service.getTypeOfWorkById(id);
    }

    @PutMapping("/updateTypeOfWork")
    public TypeOfWork updateTypeOfWork(@RequestBody TypeOfWork typeOfWork) {
        return service.updateTypeOfWork(typeOfWork);
    }

    @DeleteMapping("/deleteTypeOfWork/{id}")
    public String deleteTypeOfWork(@PathVariable int id) {
        return service.deleteTypeOfWork(id);
    }
}
