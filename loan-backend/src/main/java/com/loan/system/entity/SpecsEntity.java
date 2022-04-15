package com.loan.system.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "specs")
public class SpecsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer specsID;
    private String description;

    public SpecsEntity(Integer specsID, String description) {
        this.specsID = specsID;
        this.description = description;
    }

    public SpecsEntity() {
    }

    public Integer getId() {
        return specsID;
    }

    public void setId(Integer specsID) {
        this.specsID = specsID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
