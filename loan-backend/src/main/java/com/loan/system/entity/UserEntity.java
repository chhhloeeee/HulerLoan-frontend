package com.loan.system.entity;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID;
    private String name;
    private String password;
    private String email;

    public UserEntity(Integer userID, String name, String password, String email) {
        this.userID = userID;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public UserEntity() {
    }

    public Integer getId() {
        return userID;
    }

    public void setId(Integer userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
