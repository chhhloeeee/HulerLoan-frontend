package com.loan.system.controller;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.loan.system.model.User;
import com.loan.system.service.UserService;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{userID}")
    public ResponseEntity<User> getUserById(@PathVariable("userID") Integer userID) {
        User user = null;
        user = userService.getUserById(userID);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/users/{userID}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable("userID") Integer userID) {
        boolean deleted = false;
        deleted =userService.deleteUser(userID);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/users/{userID}")
    public ResponseEntity<User> updateUser(@PathVariable("userID") Integer userID,
                                           @RequestBody User user) {
        user = userService.updateUser(userID,user);
        return ResponseEntity.ok(user);
    }

}
