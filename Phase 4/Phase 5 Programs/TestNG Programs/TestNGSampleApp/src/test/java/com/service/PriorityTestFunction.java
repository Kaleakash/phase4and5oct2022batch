package com.service;

import org.testng.annotations.Test;

public class PriorityTestFunction {
  @Test
  public void b() {
	System.out.println("b testing function");  
  }
  @Test(priority = 4)
  public void a() {
	  System.out.println("a testing function");  
  }
  @Test(priority = 1)
  public void d() {
	  System.out.println("d testing function");  
  }
  @Test(priority = 2)
  public void c() {
	  System.out.println("c testing function");  
  }
}
