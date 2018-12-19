package com.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.pojo.Role;
import com.pojo.User;
import com.service.RoleService;
import com.service.UserService;
import com.util.MD5Util;
import com.util.ModelAndViewUtil;
import com.util.PageBean;
import com.util.ResponseUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	
	private static Logger logger = Logger.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	@Autowired
	private RoleService roleService;
	
	@RequestMapping(value = "/toUser")
	public String toUser() {
		return "main/user";
	}
	
	@RequestMapping(value = "/toUserAdd")
	public String toUserAdd() {
		return "main/userAdd";
	}
	
	@RequestMapping(value = "/not-found")
	public ModelAndView notfound() {
		return ModelAndViewUtil.toPage("error/not-found");
	}
	
	@RequestMapping(value = "/toUserEdit")
	public ModelAndView toUserEdit(HttpServletRequest request) {
		String userId = request.getParameter("userID");
		User user = userService.selectUserByKey(Integer.parseInt(userId));
		ModelAndView modelAndView = ModelAndViewUtil.toPage("main/userEdit");
		modelAndView.addObject("EditUser", user);
		return modelAndView;
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/updateUser")
	public JSONObject updateUser(HttpServletRequest request, HttpServletResponse response) throws ParseException {
		String id = request.getParameter("id");
		String userName = request.getParameter("userName");
		String passWord = request.getParameter("passWord");
		String role = request.getParameter("role");
		String createtime = request.getParameter("createtime");
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = format.parse(createtime);
		
		JSONObject result=new JSONObject();
		
		User user = new User();
		user.setId(Integer.parseInt(id));
		user.setUsername(userName);
		user.setPassword(MD5Util.MD5(passWord));
		user.setUserstate(1);
		user.setUserrole(Integer.parseInt(role));
		user.setCreattime(date);
		
		int count = userService.updateUser(user);
		if(count>0) {
			result.put("flag", "success");
		}else {
			result.put("flag", "error");
		}
		return result;
	}

	@RequestMapping(value = "/regist")
	public void regist() {
		User user = new User();
		user.setUsername("root");
		user.setPassword(MD5Util.MD5("root"));
		user.setCreattime(new Date());
		user.setUserstate(1);
		user.setUserrole(Integer.parseInt("1"));
		userService.insertUser(user);
	}

	@ResponseBody
	@RequestMapping(value = "/submitUser")
	public JSONObject submitUser(HttpServletRequest request, HttpServletResponse response) {
		String userName = request.getParameter("userName");
		String passWord = request.getParameter("passWord");
		String role = request.getParameter("role");
		
		JSONObject result=new JSONObject();
		
		User user = new User();
		user.setUsername(userName);
		user.setPassword(MD5Util.MD5(passWord));
		user.setCreattime(new Date());
		user.setUserstate(1);
		user.setUserrole(Integer.parseInt(role));
		
		List<User> users = userService.checkUserName(userName);
		if(users.size() > 0) {
			result.put("flag", "error2");
			return result;
		}
		
		int count = userService.insertUser(user);
		if(count>0) {
			result.put("flag", "success");
		}else {
			result.put("flag", "error");
		}
		return result;
	}
	
	@ResponseBody
	@RequestMapping(value = "/deleteUser")
	public JSONObject deleteUser(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		JSONObject result=new JSONObject();
		if(id.equals("1")) {
			result.put("flag", "error2");
			return result;
		}
		int count = userService.deleteByKey(id);
		if(count>0) {
			result.put("flag", "success");
		}else {
			result.put("flag", "error");
		}
		return result;
	}
	
	
	@RequestMapping(value = "/queryUserList")
	public String queryUserList(@RequestParam(value="page",required=false) String page,@RequestParam(value="rows",required=false) String rows,HttpServletResponse res) throws Exception {
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<User> userList=userService.find(map);
		Long total=userService.getTotal(map);
		
		JSONObject result=new JSONObject();
		JSONArray jsonArray=JSONArray.fromObject(userList);
		result.put("rows", jsonArray);
		result.put("total", total);
		
		ResponseUtil.write(res, result);
		return null;
	}
	
	@RequestMapping(value = "/queryRoleList")
	public String queryRoleList(@RequestParam(value="page",required=false) String page,@RequestParam(value="rows",required=false) String rows,HttpServletResponse res,HttpServletRequest request) throws Exception {
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		map.put("rolename", request.getParameter("role"));
		List<Role> userList=roleService.find(map);
		Long total=roleService.getTotal(map);
		
		JSONObject result=new JSONObject();
		JSONArray jsonArray=JSONArray.fromObject(userList);
		result.put("rows", jsonArray);
		result.put("total", total);
		
		ResponseUtil.write(res, result);
		return null;
	}
	
	
	
	@RequestMapping(value = "/searchUserList")
	public String searchUserList(@RequestParam(value="page",required=false) String page,@RequestParam(value="rows",required=false) String rows,HttpServletResponse res , HttpServletRequest request) throws Exception {
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		String username = request.getParameter("username");
		map.put("username", username);
		
		List<User> userList=userService.find(map);
		Long total=userService.getTotal(map);
		
		JSONObject result=new JSONObject();
		JSONArray jsonArray=JSONArray.fromObject(userList);
		result.put("rows", jsonArray);
		result.put("total", total);

		ResponseUtil.write(res, result);
		return null;
	}
	
	
}
