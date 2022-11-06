package com.service;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Ignore;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.AfterSuite;

public class TestHookMethods {
  @Test

  public void test1() {
	  System.out.println("while testing first function");
  }
  @Test

  public void test2() {
	  System.out.println("while testing second function");
  }
  @BeforeMethod
  public void beforeMethod() {
	  System.out.println("Before  method");
  }
  @AfterMethod
  public void afterMethod() {
	  System.out.println("After  method");
  }
  @BeforeClass
  public void beforeClass() {
	  System.out.println("Before all test method only once it required at least one test method");
  }

  @AfterClass
  public void afterClass() {
	  System.out.println("After all test method only once it requried at least one test method");
  }

  @BeforeTest
  public void beforeTest() {
	  System.out.println("Before test method call only once ");
  }

  @AfterTest
  public void afterTest() {
	  System.out.println("After test method call only once ");
  }

  @BeforeSuite
  public void beforeSuite() {
	  System.out.println("Before suite");
  }

  @AfterSuite
  public void afterSuite() {
	  System.out.println("After suite");
  }

}
