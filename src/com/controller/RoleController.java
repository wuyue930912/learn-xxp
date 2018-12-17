package com.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.pojo.Menu;
import com.pojo.Role;
import com.pojo.User;
import com.service.MenuService;
import com.service.RoleService;
import com.util.MD5Util;
import com.util.ModelAndViewUtil;
import com.util.PageBean;
import com.util.ResponseUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping(value = "/role")
public class RoleController {

	private static Logger logger = Logger.getLogger(RoleController.class);
	
	@Autowired
	private RoleService RoleService;
	
	@Autowired
	private MenuService MenuService;
	
	@RequestMapping(value = "/toRole")
	public ModelAndView toRole() {
		logger.info("=============================================跳转角色页面=============================================");
		return ModelAndViewUtil.toPage("main/role");
	}
	
	@RequestMapping(value = "/toRoleAdd")
	public String toRoleAdd() {
		return "main/roleAdd";
	}
	
	@RequestMapping(value = "/queryMenuList")
	public String queryMenuList(@RequestParam(value="page",required=false) String page,@RequestParam(value="rows",required=false) String rows,HttpServletResponse res) throws Exception {
		logger.info("=============================================查询权限=============================================");
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<Menu> menuList = MenuService.find(map);
		Long total = MenuService.getTotal(map);
		
		JSONObject result=new JSONObject();
		JSONArray jsonArray=JSONArray.fromObject(menuList);
		logger.info("=============================================返回数据::::"+jsonArray.toString()+"=============================================");
		result.put("rows", jsonArray);
		result.put("total", total);
		
		ResponseUtil.write(res, result);
		return null;
	}
	
	@RequestMapping(value = "/queryRoleList")
	public String queryRoleList(@RequestParam(value="page",required=false) String page,@RequestParam(value="rows",required=false) String rows,HttpServletResponse res) throws Exception {
		logger.info("=============================================查询角色=============================================");
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<Role> roleList = RoleService.find(map);
		Long total = RoleService.getTotal(map);
		
		JSONObject result=new JSONObject();
		JSONArray jsonArray=JSONArray.fromObject(roleList);
		logger.info("=============================================返回数据::::"+jsonArray.toString()+"=============================================");
		result.put("rows", jsonArray);
		result.put("total", total);
		
		ResponseUtil.write(res, result);
		return null;
	}
	
	@ResponseBody
	@RequestMapping(value = "/submitRole")
	public JSONObject submitRole(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
		String roleName = request.getParameter("roleName");
		String bz = request.getParameter("bz");
		String menu = request.getParameter("menu");
		User user = (User) session.getAttribute("loginUser");
		JSONObject result=new JSONObject();
		
		Role role = new Role();
		role.setName(roleName);
		role.setBz(bz);
		role.setMenus(menu);
		role.setCreatetime(new Date());
		role.setCreateuser(user.getId());
		role.setRolestate(1);
		
		List<Role> roles = RoleService.checkRoleName(roleName);
		if(roles.size() > 0) {
			result.put("flag", "error2");
			return result;
		}
		
		int count = RoleService.insertRole(role);
		if(count>0) {
			result.put("flag", "success");
		}else {
			result.put("flag", "error");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/deleteRole")
	public JSONObject deleteRole(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		JSONObject result=new JSONObject();
		if(id.equals("1")) {
			result.put("flag", "error2");
			return result;
		}
		int count = RoleService.deleteByKey(id);
		if(count>0) {
			result.put("flag", "success");
		}else {
			result.put("flag", "error");
		}
		return result;
	}
} 
