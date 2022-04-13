package com.loan.system.controller;

import com.loan.system.model.Equipment;
import com.loan.system.service.EquipmentService;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @DeleteMapping("/equipment/{equipmentID}")
    public ResponseEntity<Map<String, Boolean>> deleteEquipment(@PathVariable("equipmentID") Integer equipmentID){
        boolean deleted = false;
        deleted = equipmentService.deletedEquipment(equipmentID);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("equipement/{equipmentID}")
    public ResponseEntity<Equipment> updateEquipment(@PathVariable("equipmentID") Integer equipmentID,
                                                    @RequestBody Equipment equipment){
        equipment = equipmentService.updateEquipment(equipmentID, equipment);
        return ResponseEntity.ok(equipment);
    }
}
