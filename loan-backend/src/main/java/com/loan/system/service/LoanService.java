package com.loan.system.service;

import java.util.List;

import com.loan.system.model.Loan;

public interface LoanService {
    Loan saveLoan(Loan loan);

    List<Loan> getAllLoans();

    Loan getLoanById(Integer loanID);

    boolean deleteLoan(Integer loanID);

    Loan updateLoan(Integer loanID, Loan loan);
}
