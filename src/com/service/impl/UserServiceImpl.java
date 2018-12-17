package com.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mapper.UserMapper;
import com.pojo.User;
import com.pojo.UserExample;
import com.pojo.UserExample.Criteria;
import com.service.UserService;

@Service("UserService")
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public List<User> checkUserName(String userName) {
		UserExample example = new UserExample();
		Criteria criteria = example.createCriteria();
		criteria.andUsernameEqualTo(userName);
		return userMapper.selectByExample(example);
	}
	
	@Override
	public List<User> chekcUser(String userName,String passWord){
		UserExample example = new UserExample();
		Criteria criteria = example.createCriteria();
		criteria.andUsernameEqualTo(userName);
		criteria.andPasswordEqualTo(passWord);
		return userMapper.selectByExample(example);
	}
	
	@Override
	public int insertUser(User user) {
		return userMapper.insert(user);
	}

	@Override
	public List<User> find(Map<String, Object> map) {
		return userMapper.find(map);
	}

	@Override
	public Long getTotal(Map<String, Object> map) {
		return userMapper.getTotal(map);
	}

	@Override
	public int deleteByKey(String id) {
		// TODO Auto-generated method stub
		return userMapper.deleteByPrimaryKey(Integer.parseInt(id));
	}

	@Override
	public User selectUserByKey(int parseInt) {
		// TODO Auto-generated method stub
		return userMapper.selectByPrimaryKey(parseInt);
	}

	@Override
	public int updateUser(User user) {
		// TODO Auto-generated method stub
		return userMapper.updateByPrimaryKey(user);
	}
	

}
