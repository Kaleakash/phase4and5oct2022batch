package com.service;

import org.testng.annotations.Test;

public class CarTest {
	  @Test(groups = {"speed"})
	  public void speed() {
		  System.out.println("Car speed test");
	  }
	  @Test
	  public void color() {
		  System.out.println("Car color test");
	  }
	  @Test
	  public void mailage() {
		  System.out.println("Car mailage test");
	  }
}
