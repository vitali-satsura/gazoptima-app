package com.satsura.backend.controller;

import com.satsura.backend.entity.Position;
import com.satsura.backend.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class PositionController {

    @Autowired
    private PositionService service;

    @PostMapping("/addPosition")
    public Position addPosition(@RequestBody Position position) {
        return service.savePosition(position);
    }

    @PostMapping("/addPositions")
    public List<Position> addPositions(@RequestBody List<Position> positions) {
        return service.savePositions(positions);
    }

    @GetMapping("/positions")
    public List<Position> findAllPositions() {
        return service.getPositions();
    }

    @GetMapping("/positionById/{id}")
    public Position findPositionById(@PathVariable int id) {
        return service.getPositionById(id);
    }

    @PutMapping("/updatePosition")
    public Position updateEmployee(@RequestBody Position position) {
        return service.updatePosition(position);
    }

    @DeleteMapping("/deletePosition/{id}")
    public String deletePosition(@PathVariable int id) {
        return service.deletePosition(id);
    }
}
