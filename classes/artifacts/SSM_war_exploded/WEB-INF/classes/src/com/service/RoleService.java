package com.service;

import java.util.List;
import java.util.Map;

import com.pojo.Role;
import com.pojo.User;

public interface RoleService {
	Role findByRoleId(Integer userRoleId);

	List<Role> find(Map<String, Object> map);

	Long getTotal(Map<String, Object> map);

	List<Role> checkRoleName(String roleName);

	int insertRole(Role role);

	List<Role> findAll();

	int deleteByKey(String id);

}
