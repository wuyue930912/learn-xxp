package com.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.MenuMapper;
import com.pojo.Menu;
import com.pojo.MenuExample;
import com.pojo.MenuExample.Criteria;
import com.service.MenuService;

@Service("MenuService")
public class MenuServiceImpl implements MenuService {
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Override
	public Map<String,List<Menu>> findByRole(String[] roles) {
		Map<String,List<Menu>> map = new HashMap<>();
		List<Integer> idList = new ArrayList<>();
		for(int i = 0; i < roles.length; i++) {
			idList.add(Integer.parseInt(roles[i]));
		}
		MenuExample example = new MenuExample();
		Criteria criteria = example.createCriteria();
		criteria.andIdIn(idList);
		criteria.andPrentnodeEqualTo(0);
		map.put("fatherNode", menuMapper.selectByExample(example));
		
		MenuExample exampleSon = new MenuExample();
		Criteria criteriaSon = exampleSon.createCriteria();
		criteriaSon.andPrentnodeNotEqualTo(0);
		map.put("sonNode", menuMapper.selectByExample(exampleSon));
		
		return map;
	}

	@Override
	public List<Menu> find(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return menuMapper.find(map);
	}

	@Override
	public Long getTotal(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return menuMapper.getTotal(map);
	}

	@Override
	public List<Menu> findMenu(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return menuMapper.findMenu(map);
	}

	@Override
	public List<Menu> findAll() {
		// TODO Auto-generated method stub
		MenuExample example = new MenuExample();
		Criteria criteria = example.createCriteria();
		criteria.andPrentnodeEqualTo(0);
		return menuMapper.selectByExample(example);
	}

	@Override
	public int insert(Menu menu) {
		return menuMapper.insert(menu);
	}

	@Override
	public List<Menu> checkMenuName(String menuName) {
		MenuExample example = new MenuExample();
		Criteria criteria = example.createCriteria();
		criteria.andNameEqualTo(menuName);
		return menuMapper.selectByExample(example);
	}


	@Override
	public Long getTotalMenu(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return menuMapper.getTotalMenu(map);
	}
}
