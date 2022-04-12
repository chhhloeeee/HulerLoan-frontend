package com.loan.system.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

import com.loan.system.entity.UserEntity;
import com.loan.system.model.User;
import com.loan.system.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        List<UserEntity> userEntities
                = userRepository.findAll();

        List<User> users = userEntities
                .stream()
                .map(userEntity -> new User(
                        userEntity.getId(),
                        userEntity.getFirstName(),
                        userEntity.getLastName(),
                        userEntity.getEmailId()
                ))
                .collect(Collectors.toList());

        return users;
    }

    @Override
    public User getUserById(Integer userID) {
        UserEntity userEntity
                = userRepository.findById(userID).get();
        User user = new User();
        BeanUtils.copyProperties(userEntity, user);
        return user;
    }

    @Override
    public boolean deleteUser(Integer userID) {
        UserEntity user =  userRepository.findById(userID).get();
        userRepository.delete(user);
        return true;
    }

    @Override
    public User updateUser(Integer userID, User user) {
        UserEntity userEntity =
                userRepository.findById(userID).get();
        userEntity.setEmailId(user.getEmailId());
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());

        userRepository.save(userEntity);
        return user;
    }

}

