package com.controller;

import java.io.OutputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.*;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.VerticalAlignment;
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

	@RequestMapping("/export")
	public void export(HttpServletRequest request, HttpServletResponse response) {
		response.setContentType("application/vnd.ms-excel");
		response.setHeader("Content-disposition", "attachment;filename=userExport.xls");
		OutputStream ouputStream = null;

		List<User> list = userService.findAll();

		/***
		 * @功能  生成基础报表 含表头 表尾 数据列表。修改报表样式需要重新定义报表HSSFCellStyle
		 * @参数 （要生成报表的list/报表名称/报表中对象类型）
		 * @url   样式修改等具体参考http://poi.apache.org/apidocs/3.17/
		 * @author  Wuyue
		 */
		HSSFWorkbook wb = ExportUtil.exportData(list,"用户报表",new User());

		//重新定义报表样式
		HSSFCellStyle style = wb.createCellStyle();
		style.setFillForegroundColor(HSSFColor.HSSFColorPredefined.BLUE.getIndex());
		style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		style.setFillBackgroundColor(HSSFColor.HSSFColorPredefined.BLUE.getIndex());
		style.setAlignment(HorizontalAlignment.CENTER);// 水平居中
		style.setVerticalAlignment(VerticalAlignment.CENTER);// 垂直居中

		//重新定义表头样式
		HSSFRow row = wb.getSheet("用户报表").getRow(0);
		HSSFCell cell = row.getCell(0);
		cell.setCellStyle(style);

		//重新定义表尾样式
		HSSFRow row2 = wb.getSheet("用户报表").getRow(list.size()+2);
		HSSFCell cell2 = row2.getCell(0);
		cell2.setCellStyle(style);

		try {
			ouputStream = response.getOutputStream();
			wb.write(ouputStream);
		} catch (Exception e) {
			throw new RuntimeException("系统异常");
		} finally {
			try {
				ouputStream.flush();
				ouputStream.close();
			} catch (Exception e) {
				throw new RuntimeException("系统异常");
			}
		}
	}
	
	
}
