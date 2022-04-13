package com.loan.system.service;

import com.loan.system.model.Equipment;

import java.util.List;

public interface EquipmentService {
    Equipment saveEquipment(Equipment equipment);

    List<Equipment> getAllEquipment();

    Equipment getEquipmentById(Integer equipmentID);

    boolean deletedEquipment(Integer equipmentID);
    
}
