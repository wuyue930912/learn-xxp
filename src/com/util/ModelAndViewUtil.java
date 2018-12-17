package com.util;

import java.security.MessageDigest;

import org.springframework.web.servlet.ModelAndView;

public class ModelAndViewUtil {
	
	public static ModelAndView toPage(String page) {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(page);
		return modelAndView;
	}
}
