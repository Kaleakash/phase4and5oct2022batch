package com.test;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;

public class LoginPageTest {
 WebDriver driver;
 
  @Test
  public void loginPageTest() {
	  //driver.get("http://127.0.0.1:5500/login.html");
	  
	  //driver.get("http://localhost:8080/login.jsp");
	  
	  driver.get("http://localhost:4200/login");
	  
	  String title = driver.getTitle();
	  assertEquals(title, "Document");
	  WebElement emailRef = driver.findElement(By.id("n1"));
	  WebElement passwordRef = driver.findElement(By.id("n2"));
	  WebElement submitButtonRef = driver.findElement(By.name("b1"));
	  WebElement resetButtonRef = driver.findElement(By.name("b2"));
	  //1st approach without writing email and password we will click submit 
//	  submitButtonRef.submit();
//	  Alert alertRef = driver.switchTo().alert();
//	  String msg = alertRef.getText();
//	  assertEquals(msg, "user name is required");
	  
//	  //2nd approach we will write email but not password then click submit button 
//	  emailRef.sendKeys("raj@gmail.com");
//	  submitButtonRef.submit();
//	  Alert alertRef = driver.switchTo().alert();
//	  String msg = alertRef.getText();
//	  assertEquals(msg, "Password is required");
	  
//	  //3rd approach we will write email and password then click submit button 
//	  emailRef.sendKeys("raj@gmail.com");
//	  passwordRef.sendKeys("123456");
//	  submitButtonRef.submit();
//	  Alert alertRef = driver.switchTo().alert();
//	  String msg = alertRef.getText();
//	  assertEquals(msg, "failure try once again");
	  
	//4th approach we will write email and password then click submit button 
	  emailRef.sendKeys("raj@gmail.com");
	  passwordRef.sendKeys("123");
	  submitButtonRef.submit();
	  Alert alertRef = driver.switchTo().alert();
	  String msg = alertRef.getText();
	  assertEquals(msg, "successfully login");
	  alertRef.dismiss();
	  WebElement targetPageContent = driver.findElement(By.tagName("h2"));
	  assertEquals(targetPageContent.getText(), "Welcome to Home Page");
  }
  @BeforeClass
  public void beforeClass() {
   System.setProperty("webdriver.chrome.driver", "D:\\Desktop\\Java Full Stack Oct Batch 2022 - Phase 4 and 5 - 1\\Phase 4 and 5\\chromedriver_win32\\chromedriver.exe");
   driver = new ChromeDriver();
  }

  @AfterClass
  public void afterClass() {
	  driver.close();
  }

}
