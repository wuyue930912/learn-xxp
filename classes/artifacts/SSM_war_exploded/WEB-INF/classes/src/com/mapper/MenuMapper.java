package com.mapper;

import com.pojo.Menu;
import com.pojo.MenuExample;
import com.pojo.Role;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface MenuMapper {
    long countByExample(MenuExample example);

    int deleteByExample(MenuExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Menu record);

    int insertSelective(Menu record);

    List<Menu> selectByExample(MenuExample example);

    Menu selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Menu record, @Param("example") MenuExample example);

    int updateByExample(@Param("record") Menu record, @Param("example") MenuExample example);

    int updateByPrimaryKeySelective(Menu record);

    int updateByPrimaryKey(Menu record);

	Long getTotal(Map<String, Object> map);

	List<Menu> find(Map<String, Object> map);

    List<Menu> findMenu(Map<String, Object> map);

    Long getTotalMenu(Map<String, Object> map);
}