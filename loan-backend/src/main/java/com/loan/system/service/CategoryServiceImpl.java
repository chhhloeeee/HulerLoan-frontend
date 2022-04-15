package com.loan.system.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.loan.system.entity.CategoryEntity;
import com.loan.system.model.Category;
import com.loan.system.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService{

    private CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category saveCategory(Category category) {
        CategoryEntity categoryEntity = new CategoryEntity();
        BeanUtils.copyProperties(category, categoryEntity);
        categoryRepository.save(categoryEntity);
        return category;
    }

    @Override
    public List<Category> getAllCategories() {
        List<CategoryEntity> categoryEntities
                = categoryRepository.findAll();

        List<Category> category = categoryEntities
                .stream()
                .map(categoryEntity -> new Category(
                        categoryEntity.getId(),
                        categoryEntity.getName()
                ))
                .collect(Collectors.toList());
        return category;
    }

    @Override
    public Category getCategoryById(Integer categoryID) {
        CategoryEntity categoryEntity
                = categoryRepository.findById(categoryID).get();
        Category category = new Category();
        BeanUtils.copyProperties(categoryEntity, category);
        return category;
    }

    @Override
    public boolean deletedCategory(Integer categoryID) {
        CategoryEntity category =  categoryRepository.findById(categoryID).get();
        categoryRepository.delete(category);
        return true;
    }

    @Override
    public Category updateCategory(Integer categoryID, Category category) {
        CategoryEntity categoryEntity =
                categoryRepository.findById(categoryID).get();
        categoryEntity.setName(category.getName());

        categoryRepository.save(categoryEntity);
        return category;
    }

}


