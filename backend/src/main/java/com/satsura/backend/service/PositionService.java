package com.satsura.backend.service;

import com.satsura.backend.entity.Position;
import com.satsura.backend.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService {

    @Autowired
    private PositionRepository repository;

    public Position savePosition(Position position) {
        return repository.save(position);
    }

    public List<Position> savePositions(List<Position> positions) {
        return repository.saveAll(positions);
    }

    public List<Position> getPositions() {
        return repository.findAll();
    }

    public Position getPositionById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deletePosition(int id) {
        repository.deleteById(id);
        return "Position removed !!!" + id;
    }

    public Position updatePosition(Position position) {
        Position existingPosition = repository.findById(position.getId()).orElse(null);
        existingPosition.setName(position.getName());
        existingPosition.setSalary(position.getSalary());
        return repository.save(existingPosition);
    }
}
