package com.test;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;

import static org.testng.Assert.assertEquals;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;

public class GooglePageTest {
	WebDriver driver;
	 
	  @Test
	  public void googlePageTest() {
		  driver.get("http://www.google.com");
		  driver.manage().window().maximize();
		  driver.manage().timeouts().implicitlyWait(Duration.ofMinutes(1));
		  WebElement textFieldRef = driver.findElement(By.name("q"));
		  textFieldRef.sendKeys("What is testing");
		  WebElement searchButtonRef = driver.findElement(By.name("btnK"));
		  searchButtonRef.click();
		 
	  }
	  @BeforeClass
	  public void beforeClass() {
	   System.setProperty("webdriver.chrome.driver", "D:\\Desktop\\Java Full Stack Oct Batch 2022 - Phase 4 and 5 - 1\\Phase 4 and 5\\chromedriver_win32\\chromedriver.exe");
	   driver = new ChromeDriver();
	  }

	  @AfterClass
	  public void afterClass() {
		  try {
			 // driver.close();
		  }catch(Exception e) {
			  System.out.println(e);
		  }
	  }	

}
