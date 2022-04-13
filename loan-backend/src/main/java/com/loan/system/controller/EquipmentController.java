package com.loan.system.controller;

import com.loan.system.model.Equipment;
import com.loan.system.service.EquipmentService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class EquipmentController {


    private EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService){
        this.equipmentService = equipmentService;
    }
    
    @PostMapping("/equipment")
    public Equipment saveEquipment(@RequestBody Equipment equipment){
        return equipmentService.saveEquipment(equipment);
    }

    @GetMapping("/equipment")
    public List<Equipment> getAllEquipment(){
        return equipmentService.getAllEquipment();
    }

    @GetMapping("equipment/{equipmentID}")
    public ResponseEntity<Equipment> getEquipmentById(@PathVariable("equipmentID") Integer equipmentID){
        Equipment equipment = null;
        equipment = equipmentService.getEquipmentById(equipmentID);
        return ResponseEntity.ok(equipment);
    }
}
