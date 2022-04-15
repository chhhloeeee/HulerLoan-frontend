package com.loan.system.repository;

import com.loan.system.entity.SpecsEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecsRepository extends JpaRepository<SpecsEntity, Integer> {
}
