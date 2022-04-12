package com.loan.system.service;

import java.util.List;

import com.loan.system.model.User;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Integer userID);

    boolean deleteUser(Integer userID);

    User updateUser(Integer userID, User user);
}
