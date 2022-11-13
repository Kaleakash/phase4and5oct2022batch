package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.EmployeeService;

@RestController
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	@PostMapping(value = "storeEmployee",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeProduct(@RequestBody Employee employee) {
	
		return employeeService.storeEmployee(employee);
		
	}
	@GetMapping(value = "retrieveEmployee",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Employee> getAllEmployee() {
		return employeeService.getAllEmployee();
	}
	
}


