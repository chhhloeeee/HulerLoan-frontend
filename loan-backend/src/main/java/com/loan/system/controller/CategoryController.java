package com.loan.system.controller;

import com.loan.system.model.Category;
import com.loan.system.service.CategoryService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CategoryController {


    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService){
        this.categoryService = categoryService;
    }
    
    @PostMapping("/category")
    public Category saveCategory(@RequestBody Category category){
        return categoryService.saveCategory(category);
    }

    @GetMapping("/category")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @GetMapping("/category/{categoryID}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("categoryID") Integer categoryID){
        Category category = null;
        category = categoryService.getCategoryById(categoryID);
        return ResponseEntity.ok(category);
    }

    @DeleteMapping("/category/{categoryID}")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable("categoryID") Integer categoryID){
        boolean deleted = false;
        deleted = categoryService.deletedCategory(categoryID);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("category/{categoryID}")
    public ResponseEntity<Category> updateCategory(@PathVariable("categoryID") Integer categoryID,
                                                    @RequestBody Category category){
        category = categoryService.updateCategory(categoryID, category);
        return ResponseEntity.ok(category);
    }
}
