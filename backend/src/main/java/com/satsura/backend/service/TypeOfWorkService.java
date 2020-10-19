package com.satsura.backend.service;

import com.satsura.backend.entity.TypeOfWork;
import com.satsura.backend.repository.TypeOfWorkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeOfWorkService {

    @Autowired
    private TypeOfWorkRepository repository;

    public TypeOfWork saveTypeOfWork(TypeOfWork typeOfWork) {
        return repository.save(typeOfWork);
    }

    public List<TypeOfWork> saveTypeOfWorks(List<TypeOfWork> typeOfWorks) {
        return repository.saveAll(typeOfWorks);
    }

    public List<TypeOfWork> getTypeOfWorks() {
        return repository.findAll();
    }

    public TypeOfWork getTypeOfWorkById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteTypeOfWork(int id) {
        repository.deleteById(id);
        return "Type Of Work removed !!!" + id;
    }

    public TypeOfWork updateTypeOfWork(TypeOfWork typeOfWork) {
        TypeOfWork existingTypeOfWork = repository.findById(typeOfWork.getId()).orElse(null);
        existingTypeOfWork.setName(typeOfWork.getName());
        return repository.save(existingTypeOfWork);
    }
}
