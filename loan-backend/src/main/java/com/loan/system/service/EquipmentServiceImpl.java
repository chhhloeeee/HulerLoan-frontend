package com.loan.system.service;

import com.loan.system.entity.EquipmentEntity;
import com.loan.system.model.Equipment;
import com.loan.system.repository.EquipmentRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    private EquipmentRepository equipmentRepository;

    public EquipmentServiceImpl(EquipmentRepository equipmentRepository){
        this.equipmentRepository = equipmentRepository;
    }

    @Override
    public Equipment saveEquipment(Equipment equipment) {
        EquipmentEntity equipmentEntity = new EquipmentEntity();
        BeanUtils.copyProperties(equipment, equipmentEntity);
        equipmentRepository.save(equipmentEntity);
        return equipment;
    }

    @Override
    public List<Equipment> getAllEquipment(){
        List<EquipmentEntity> equipmentEntities
            = equipmentRepository.findAll();

            List<Equipment> equipment = equipmentEntities
                .stream()
                .map(equipmentEntity -> new Equipment(
                    equipmentEntity.getEquipmentID(),
                    equipmentEntity.getCategoryID(),
                    equipmentEntity.getSpecsID(),
                    equipmentEntity.getAvailability()
                ))
                .collect(Collectors.toList());
        return equipment;
    }

    @Override
    public Equipment getEquipmentById(Integer equipmentID) {
        EquipmentEntity equipmentEntity
            = equipmentRepository.findById(equipmentID).get();
            Equipment equipment = new Equipment();
            BeanUtils.copyProperties(equipmentEntity, equipment);
        return equipment;
    }

    @Override
    public boolean deletedEquipment(Integer equipmentID) {
        EquipmentEntity equipment = equipmentRepository.findById(equipmentID).get();
        equipmentRepository.delete(equipment);
        return true;
    }

    @Override
    public Equipment updateEquipment(Integer equipmentID, Equipment equipment) {
        EquipmentEntity equipmentEntity = 
                equipmentRepository.findById(equipmentID).get();
        equipmentEntity.setCategoryID(equipment.getCategoryID());
        equipmentEntity.setSpecsID(equipment.getSpecsID());
        equipmentEntity.setAvailability(equipment.getAvailability());

        equipmentRepository.save(equipmentEntity);
        return equipment;
    }
    
}
