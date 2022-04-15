package com.loan.system.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.loan.system.model.Loan;
import com.loan.system.service.LoanService;


@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class LoanController {

    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping("/loans")
    public Loan saveLoan(@RequestBody Loan loan) {
        return loanService.saveLoan(loan);
    }

    @GetMapping("/loans")
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    @GetMapping("/loan/{loanID}")
    public ResponseEntity<Loan> getLoanById(@PathVariable("loanID") Integer loanID) {
        Loan loan = null;
        loan = loanService.getLoanById(loanID);
        return ResponseEntity.ok(loan);
    }

    @DeleteMapping("/loan/{loanID}")
    public ResponseEntity<Map<String,Boolean>> deleteLoan(@PathVariable("loanID") Integer loanID) {
        boolean deleted = false;
        deleted = loanService.deleteLoan(loanID);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/users/{userID}")
    public ResponseEntity<Loan> updateLoan(@PathVariable("loanID") Integer loanID,
                                           @RequestBody Loan loan) {
        loan = loanService.updateLoan(loanID, loan);
        return ResponseEntity.ok(loan);
    }

}
