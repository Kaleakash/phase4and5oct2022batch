package com.service;

import org.testng.annotations.Test;

public class BikeTest {
	@Test(groups = {"speed"})
  public void speed() {
	  System.out.println("Bike speed test");
  }
  @Test
  public void color() {
	  System.out.println("Bike color test");
  }
  @Test
  public void mailage() {
	  System.out.println("Bike mailage test");
  }
}
