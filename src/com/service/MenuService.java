package com.service;

import java.util.List;
import java.util.Map;

import com.pojo.Menu;
import com.pojo.Role;

public interface MenuService {
    Map<String,List<Menu>> findByRole(String[] roles);

	List<Menu> find(Map<String, Object> map);

	Long getTotal(Map<String, Object> map);

	List<Menu> findMenu(Map<String, Object> map);

	Long getTotalMenu(Map<String, Object> map);

	List<Menu> findAll();

	int insert(Menu menu);

	List<Menu> checkMenuName(String menuName);

}
