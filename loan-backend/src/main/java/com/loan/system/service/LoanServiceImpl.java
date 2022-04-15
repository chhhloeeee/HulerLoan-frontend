package com.loan.system.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.loan.system.entity.LoanEntity;
import com.loan.system.model.Loan;
import com.loan.system.repository.LoanRepository;

@Service
public class LoanServiceImpl implements LoanService{

    private LoanRepository loanRepository;

    public LoanServiceImpl(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    @Override
    public Loan saveLoan(Loan loan) {
        LoanEntity loanEntity = new LoanEntity();
        BeanUtils.copyProperties(loan , loanEntity);
        loanRepository.save(loanEntity);
        return loan;
    }

    @Override
    public List<Loan> getAllLoans() {
        List<LoanEntity> loanEntities
                = loanRepository.findAll();

        List<Loan> loan = loanEntities
                .stream()
                .map(loanEntity -> new Loan(
                        loanEntity.getId(),
                        loanEntity.getUserId(),
                        loanEntity.getCategoryId(),
                        loanEntity.getIssueDate(),
                        loanEntity.getReturnDate(),
                        loanEntity.getDaysElapsed(),
                        loanEntity.getActive()
                ))
                .collect(Collectors.toList());

        return loan;
    }

    @Override
    public Loan getLoanById(Integer loanID) {
        LoanEntity loanEntity
                = loanRepository.findById(loanID).get();
        Loan loan = new Loan();
        BeanUtils.copyProperties(loanEntity, loan);
        return loan;
    }

    @Override
    public boolean deleteLoan(Integer loanID) {
        LoanEntity loan =  loanRepository.findById(loanID).get();
        loanRepository.delete(loan);
        return true;
    }

    @Override
    public Loan updateLoan(Integer loanID, Loan loan) {
        LoanEntity loanEntity =
                loanRepository.findById(loanID).get();
        loanEntity.setUserId(loan.getUserID());
        loanEntity.setCategoryId(loan.getCategoryID());
        loanEntity.setIssueDate(loan.getIssueDate());
        loanEntity.setReturnDate(loan.getReturnDate());
        loanEntity.setDaysElapsed(loan.getDaysElapsed());
        loanEntity.setActive(loan.getActive());

        loanRepository.save( loanEntity);
        return loan;
    }

}


