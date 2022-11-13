package com.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

	
	@GetMapping(value = "/")
	public String greeting() {
		return "Welcome to Spring boot with docker";
	}
	
	@GetMapping(value = "say/{name}")
	public String sayHello(@PathVariable("name") String name) {
		return "Welcome to Spring boot user "+name+"with docker";
	}
}
