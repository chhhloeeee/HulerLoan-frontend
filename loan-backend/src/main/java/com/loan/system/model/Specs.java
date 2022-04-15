package com.loan.system.model;

public class Specs {
    private Integer specsID;
    private String description;

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

    public Specs(Integer specsID, String description) {
        this.specsID = specsID;
        this.description = description;
    }

    public Specs() {
    }
}
