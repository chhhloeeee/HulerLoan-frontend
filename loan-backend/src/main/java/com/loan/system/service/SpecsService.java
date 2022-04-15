package com.loan.system.service;

import java.util.List;

import com.loan.system.model.Specs;

public interface SpecsService {
    Specs saveSpecs(Specs specs);

    List<Specs> getAllSpecs();

    Specs getSpecsById(Integer specsID);

    boolean deletedSpecs(Integer specsID);

    Specs updateSpecs(Integer specsID, Specs specs);
}
