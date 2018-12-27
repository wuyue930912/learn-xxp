package com.controller;

import com.pojo.Rtmp;
import com.service.RmtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping(value = "/red5")
public class Red5Controller {

    @Autowired
    private RmtpService rmtpService;

    @RequestMapping(value = "/toLive")
    public String toLive(){
        return "red5";
    }

    @RequestMapping(value = "/toLiveMenu")
    public ModelAndView toLiveMenu(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("rtmp/liveMenu");
        List<Rtmp> list = rmtpService.findAll();
        modelAndView.addObject("lives",list);
        return modelAndView;
    }

    @RequestMapping(value = "/toLivePage")
    public String toLivePage(){
        return "rtmp/jwPlayer";
    }

    @RequestMapping(value = "/toOneLive")
    public ModelAndView toOneLive(HttpServletRequest request){
        String name = request.getParameter("name");
        ModelAndView modelAndVie = new ModelAndView();
        modelAndVie.setViewName("rtmp/jwPlayer");
        modelAndVie.addObject("liveName",name);
        modelAndVie.addObject("liveRtmp","rtmp://127.0.0.1:1935/vod/" + name);
        return modelAndVie;
    }


}
