package com.loan.system.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.loan.system.entity.SpecsEntity;
import com.loan.system.model.Specs;
import com.loan.system.repository.SpecsRepository;

@Service
public class SpecsServiceImpl implements SpecsService{

    private SpecsRepository specsRepository;

    public SpecsServiceImpl(SpecsRepository specsRepository) {
        this.specsRepository = specsRepository;
    }

    @Override
    public Specs saveSpecs(Specs specs) {
        SpecsEntity specsEntity = new SpecsEntity();
        BeanUtils.copyProperties(specs, specsEntity);
        specsRepository.save(specsEntity);
        return specs;
    }

    @Override
    public List<Specs> getAllSpecs() {
        List<SpecsEntity> specsEntities
                = specsRepository.findAll();

        List<Specs> specs = specsEntities
                .stream()
                .map(specsEntity -> new Specs(
                        specsEntity.getId(),
                        specsEntity.getDescription()
                ))
                .collect(Collectors.toList());
        return specs;
    }

    @Override
    public Specs getSpecsById(Integer specsID) {
        SpecsEntity specsEntity
                = specsRepository.findById(specsID).get();
        Specs specs = new Specs();
        BeanUtils.copyProperties(specsEntity, specs);
        return specs;
    }

    @Override
    public boolean deletedSpecs(Integer specsID) {
        SpecsEntity specs =  specsRepository.findById(specsID).get();
        specsRepository.delete(specs);
        return true;
    }

    @Override
    public Specs updateSpecs(Integer specsID, Specs specs) {
        SpecsEntity specsEntity =
                specsRepository.findById(specsID).get();
        specsEntity.setDescription(specs.getDescription());

        specsRepository.save(specsEntity);
        return specs;
    }

}


