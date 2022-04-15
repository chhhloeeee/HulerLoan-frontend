package com.loan.system.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loan")
public class LoanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loanID;
    private Integer userID;
    private Integer categoryID;
    private Date issueDate;
    private Date returnDate;
    private Integer daysElapsed;
    private Boolean active;

    public LoanEntity(Integer loanID, Integer userID, Integer categoryID, Date issueDate, Date returnDate, 
            Integer daysElapsed, Boolean active) {
        this.loanID = loanID;
        this.userID = userID;
        this.categoryID = categoryID;
        this.issueDate = issueDate;
        this.returnDate = returnDate;
        this.daysElapsed = daysElapsed;
        this.active = active;
    }

    public LoanEntity() {
    }

    public Integer getId() {
        return loanID;
    }

    public void setId(Integer loanID) {
        this.loanID = loanID;
    }

    public Integer getUserId() {
        return userID;
    }

    public void setUserId(Integer userID) {
        this.userID = userID;
    }

    public Integer getCategoryId() {
        return categoryID;
    }

    public void setCategoryId(Integer categoryID) {
        this.categoryID = categoryID;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public Integer getDaysElapsed() {
        return daysElapsed;
    }

    public void setDaysElapsed(Integer daysElapsed) {
        this.daysElapsed = daysElapsed;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
    
}
