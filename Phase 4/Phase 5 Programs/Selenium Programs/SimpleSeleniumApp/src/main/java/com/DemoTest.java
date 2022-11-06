package com;

import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class DemoTest {

	public static void main(String[] args) {
	System.setProperty("webdriver.chrome.driver", 
			"D:\\Desktop\\Java Full Stack Oct Batch 2022 - Phase 4 and 5 - 1\\Phase 4 and 5\\chromedriver_win32\\chromedriver.exe");
	WebDriver driver = new ChromeDriver();
driver.get("file:///D:/Desktop/Java%20Full%20Stack%20Oct%20Batch%202022%20-%20Phase%204%20and%205%20-%201/Phase%204%20and%205/web%20pages/index.html");
	
	String url = driver.getCurrentUrl();
	
//	String titleTagContent = driver.getTitle();
//	String pageContent	= driver.getPageSource();
//	System.out.println(url);
//	System.out.println(titleTagContent);
//	System.out.println(pageContent);
//	WebElement h2TagRef	 = driver.findElement(By.tagName("h2"));
//	WebElement pTagRef	 = driver.findElement(By.tagName("p"));
//	WebElement divTagRef	 = driver.findElement(By.tagName("div"));
//	WebElement bTagRef	 = driver.findElement(By.tagName("b"));
//	System.out.println(h2TagRef.getTagName()+" "+h2TagRef.getText());
//	System.out.println(pTagRef.getTagName()+" "+pTagRef.getText());
//	System.out.println(divTagRef.getTagName()+" "+divTagRef.getText());
//	System.out.println(bTagRef.getTagName()+" "+bTagRef.getText());
	
//	WebElement pTagRef	 = driver.findElement(By.tagName("p"));
//	WebElement pTagRefId1 = driver.findElement(By.id("p1"));
//	WebElement pTagRefId2 = driver.findElement(By.id("p2"));
//	System.out.println(pTagRef.getTagName()+" "+pTagRef.getText());
//	System.out.println(pTagRefId1.getTagName()+" "+pTagRefId1.getText());
//	System.out.println(pTagRefId2.getTagName()+" "+pTagRefId2.getText());
				
	List<WebElement> ll = driver.findElements(By.tagName("p"));
	Iterator<WebElement> li = ll.iterator();
	while(li.hasNext()) {
		WebElement pRef = li.next();
		System.out.println(pRef.getTagName()+" "+pRef.getText());
	}
	}

}



