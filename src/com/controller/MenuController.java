package com.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.pojo.Menu;
import com.service.MenuService;
import com.util.MD5Util;
import com.util.ModelAndViewUtil;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pojo.User;
import com.util.PageBean;
import com.util.ResponseUtil;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/menu")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @RequestMapping(value = "/toMenu")
    public ModelAndView toMenu(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("main/menu");
        modelAndView.addObject("fathers",menuService.findAll());
        return modelAndView;
    }

    @RequestMapping(value = "/queryMenuList")
    public String queryMenuList(HttpServletRequest req ,HttpServletResponse res) throws Exception {
        Map<String,Object> map=new HashMap<String,Object>();
        String name = req.getParameter("menuName");
        String url = req.getParameter("menuUrl");
        map.put("menuName",name);
        map.put("menuUrl",url);

        map.put("start",Integer.parseInt(req.getParameter("offset")));
        map.put("size",Integer.parseInt(req.getParameter("limit")));
        List<Menu> userList=menuService.findMenu(map);
        Long total=menuService.getTotalMenu(map);

        net.sf.json.JSONObject result=new JSONObject();
        net.sf.json.JSONArray jsonArray= JSONArray.fromObject(userList);
        result.put("rows", jsonArray);
        result.put("total", total);

        ResponseUtil.write(res, result);
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/submitMenu")
    public JSONObject submitMenu(HttpServletRequest request,HttpSession session){
        String menuNameAdd = request.getParameter("menuNameAdd");
        String menuUrlAdd = request.getParameter("menuUrlAdd");
        String fathernode = request.getParameter("fathernode");
        User user = (User) session.getAttribute("loginUser");

        JSONObject result=new JSONObject();

        Menu menu = new Menu();
        menu.setName(menuNameAdd);
        menu.setUrl(menuUrlAdd);
        menu.setPrentnode(Integer.parseInt(fathernode));
        menu.setState(0);
        menu.setCreatuserid(user.getId());
        menu.setCreattime(new Date());

        List<Menu> menus = menuService.checkMenuName(menuNameAdd);
        if(menus.size() > 0) {
            result.put("flag", "error2");
            return result;
        }

        int count = menuService.insert(menu);
        if(count>0) {
            result.put("flag", "success");
        }else {
            result.put("flag", "error");
        }
        return result;
    }
}
