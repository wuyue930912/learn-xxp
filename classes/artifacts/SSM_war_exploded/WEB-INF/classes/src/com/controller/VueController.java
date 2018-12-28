package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/vue")
public class VueController {

    @RequestMapping(value = "/vueBuild")
    public String vueBuild(){
        return "vue/vuePage";
    }
}
