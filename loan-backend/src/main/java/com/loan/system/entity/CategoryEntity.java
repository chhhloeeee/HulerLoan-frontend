package com.loan.system.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "category")
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryID;
    private String name;

    public CategoryEntity(Integer categoryID, String name) {
        this.categoryID = categoryID;
        this.name = name;
    }

    public CategoryEntity() {
    }

    public Integer getId() {
        return categoryID;
    }

    public void setId(Integer categoryID) {
        this.categoryID = categoryID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
