package com.controller;

import java.security.MessageDigest;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.pojo.Menu;
import com.pojo.Role;
import com.pojo.User;
import com.service.MenuService;
import com.service.RoleService;
import com.service.UserService;
import com.util.MyException;

@Controller
public class LoginController {

	private static Logger logger = Logger.getLogger(LoginController.class);

	@Autowired
	private UserService userService;
	@Autowired
	private RoleService roleService;
	@Autowired
	private MenuService menuService;

	@RequestMapping(value = "/loginFail", method = RequestMethod.GET)
	public String getLoginView(HttpServletRequest request, HttpServletResponse response) {
		// 绛惧埌澶辫触鏃讹紝杩斿洖绛惧埌鐣岄潰
		return "redirect:/login";
	}
	@RequestMapping(value = "/main/center", method = RequestMethod.GET)
	public String toCenter(HttpServletRequest request, HttpServletResponse response) {
		// 绛惧埌澶辫触鏃讹紝杩斿洖绛惧埌鐣岄潰
		return "main/center";
	}
	
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public ModelAndView getMainView(HttpServletRequest request, HttpServletResponse response, HttpSession httpSession) throws MyException {
		User user = (User) httpSession.getAttribute("loginUser");
		
		if(user == null) {
			throw new MyException("Session超时");
		}
		
		Role role = roleService.findByRoleId(user.getUserrole());
		logger.info("角色查询::::权限::::" + role.getMenus());
		String[] menus = role.getMenus().split(",");
		Map<String,List<Menu>> map = menuService.findByRole(menus);
		List<Menu> list = map.get("fatherNode");
		List<Menu> listSon = map.get("sonNode");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("main/main");
		modelAndView.addObject("menuList", list);
		modelAndView.addObject("sonList", listSon);
		return modelAndView;
	}

	@RequestMapping(value = "/toLoginTwo", method = RequestMethod.POST)
	@ResponseBody
	public String toLoginTwo(HttpServletRequest request, HttpServletResponse response, HttpSession httpSession) {
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");

		logger.info("开始登录::::" + new Date() + "::::用户名::::" + userName);
		List<User> list = userService.checkUserName(userName);
		if (list.size() > 0) {
			List<User> list2 = userService.chekcUser(userName, MD5(password));
			if (list2.size() > 0) {
				User user = list2.get(0);
				httpSession.setAttribute("loginUser", user);
				logger.info("登陆成功::::" + new Date());
				return "9001";
			} else {
				logger.error("密码错误::::" + new Date());
				return "9002";
			}
		} else {
			logger.error("用户不存在::::" + new Date());
			return "9999";
		}
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(HttpServletRequest request, HttpServletResponse response, HttpSession httpSession) {
		return "login";
	}

	public static String MD5(String key) {
		char hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
		try {
			byte[] btInput = key.getBytes();
			MessageDigest mdInst = MessageDigest.getInstance("MD5");
			mdInst.update(btInput);
			byte[] md = mdInst.digest();
			int j = md.length;
			char str[] = new char[j * 2];
			int k = 0;
			for (int i = 0; i < j; i++) {
				byte byte0 = md[i];
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				str[k++] = hexDigits[byte0 & 0xf];
			}
			return new String(str);
		} catch (Exception e) {
			return null;
		}
	}

}
