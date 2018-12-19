package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/websocket")
public class WebSocketController {
	
	@RequestMapping(value = "/toWebSocket")
	public String toWebSocket() {
		return "main/websocket";
	}
}
