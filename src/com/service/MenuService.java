package com.service;

import java.util.List;
import java.util.Map;

import com.pojo.Menu;
import com.pojo.Role;

public interface MenuService {
     Map<String,List<Menu>> findByRole(String[] roles);

	List<Menu> find(Map<String, Object> map);

	Long getTotal(Map<String, Object> map);
}
