package com.loan.system.model;

public class User {
    private Integer userID;
    private String firstName;
    private String lastName;
    private String emailId;

    public Integer getId() {
        return userID;
    }

    public void setId(Integer userID) {
        this.userID = userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public User(Integer l, String firstName, String lastName, String emailId) {
        this.userID = l;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }

    public User() {
    }
}
