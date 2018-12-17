package com.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

public class CustomExceptionResolver implements HandlerExceptionResolver {

	@Override
	public ModelAndView resolveException(HttpServletRequest request,HttpServletResponse response, Object handler, Exception ex) {
		ex.printStackTrace();
		String message = ex.toString();
		ModelAndView modelAndView = new ModelAndView();
		if(message.endsWith("Session³¬Ê±")) {
			modelAndView.setViewName("error/invalid-session");
		}else {
			modelAndView.setViewName("error/internal-server-error");
		}
		
		return modelAndView;
	}

}