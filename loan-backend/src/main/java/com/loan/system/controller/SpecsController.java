package com.loan.system.controller;

import com.loan.system.model.Specs;
import com.loan.system.service.SpecsService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class SpecsController {


    private SpecsService specsService;

    public SpecsController(SpecsService specsService){
        this.specsService = specsService;
    }
    
    @PostMapping("/specs")
    public Specs saveSpecs(@RequestBody Specs specs){
        return specsService.saveSpecs(specs);
    }

    @GetMapping("/specs")
    public List<Specs> getAllSpecs(){
        return specsService.getAllSpecs();
    }

    @GetMapping("/specs/{specsID}")
    public ResponseEntity<Specs> getSpecsById(@PathVariable("specsID") Integer specsID){
        Specs specs = null;
        specs = specsService.getSpecsById(specsID);
        return ResponseEntity.ok(specs);
    }

    @DeleteMapping("/specs/{specsID}")
    public ResponseEntity<Map<String, Boolean>> deleteSpecs(@PathVariable("specsID") Integer specsID){
        boolean deleted = false;
        deleted = specsService.deletedSpecs(specsID);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("specs/{specsID}")
    public ResponseEntity<Specs> updateSpecs(@PathVariable("specsID") Integer specsID,
                                                    @RequestBody Specs specs){
        specs = specsService.updateSpecs(specsID, specs);
        return ResponseEntity.ok(specs);
    }
}
