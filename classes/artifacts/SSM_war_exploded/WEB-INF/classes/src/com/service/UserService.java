package com.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.UserMapper;
import com.pojo.User;
import com.pojo.UserExample;
import com.pojo.UserExample.Criteria;


public interface UserService{
	
	List<User> checkUserName(String userName);
	
	List<User> chekcUser(String userName,String passWord);

	int insertUser(User user);

	List<User> find(Map<String, Object> map);

	Long getTotal(Map<String, Object> map);

	int deleteByKey(String id);

	User selectUserByKey(int parseInt);

	int updateUser(User user);


    List<User> findAll();
}