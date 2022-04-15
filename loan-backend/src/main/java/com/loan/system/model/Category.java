package com.loan.system.model;

public class Category {
    private Integer categoryID;
    private String name;

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

    public Category(Integer categoryID, String name) {
        this.categoryID = categoryID;
        this.name = name;
    }

    public Category() {
    }
}
