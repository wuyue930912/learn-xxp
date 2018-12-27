package com.controller;

import com.pojo.Rtmp;
import com.service.RmtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
        modelAndView.addObject(list);
        return modelAndView;
    }
}
