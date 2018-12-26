package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/red5")
public class Red5Controller {

    @RequestMapping(value = "/toLive")
    public String toLive(){
        return "red5";
    }
}
