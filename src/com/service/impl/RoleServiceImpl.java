package com.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.RoleMapper;
import com.pojo.Role;
import com.pojo.RoleExample;
import com.pojo.User;
import com.service.RoleService;

@Service("RoleService")
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	private RoleMapper roleMapper;
	
	@Override
	public Role findByRoleId(Integer userRoleId) {
		// TODO Auto-generated method stub
		return roleMapper.selectByPrimaryKey(userRoleId);
	}

	@Override
	public List<Role> find(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return roleMapper.find(map);
	}	

	@Override
	public Long getTotal(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return roleMapper.getTotal(map);
	}

	@Override
	public List<Role> checkRoleName(String roleName) {
		RoleExample example = new RoleExample();
		example.createCriteria().andNameEqualTo(roleName);
		return roleMapper.selectByExample(example);
	}

	@Override
	public int insertRole(Role role) {
		// TODO Auto-generated method stub
		return roleMapper.insert(role);
	}

	@Override
	public List<Role> findAll() {
		// TODO Auto-generated method stub
		return roleMapper.selectByExample(new RoleExample());
	}

	@Override
	public int deleteByKey(String id) {
		// TODO Auto-generated method stub
		return roleMapper.deleteByPrimaryKey(Integer.parseInt(id));
	}
}
