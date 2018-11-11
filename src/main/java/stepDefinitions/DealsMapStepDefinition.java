//package stepDefinitions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import java.util.Map;
//
//public class DealsMapStepDefinition {
//
//    public static WebDriver driver;
//
//    @Given("^user is on login page$")
//    public void user_is_on_login_page() {
//        System.setProperty("webdriver.chrome.driver", "/Users/mdtaque/SELENIUM/FreeCRMBDDFramework/driver/chromedriver");
//        driver = new ChromeDriver();
//        driver.get("https://www.freecrm.com/index.html");
//    }
//
//    @When("^title of login page is Free CRM$")
//    public void title_of_login_page_is_Free_CRM() {
//        String title = driver.getTitle();
//        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
//    }
//
//    @Then("^user enters username and password$")
//    public void user_enters_username_and_password(DataTable credentials) {
//        for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
//            driver.findElement(By.name("username")).sendKeys(data.get("username"));
//            driver.findElement(By.name("password")).sendKeys(data.get("password"));
//        }
//    }
//
//    @Then("^user clicks on login button$")
//    public void user_clicks_on_login_button() {
//        WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
//        JavascriptExecutor js = (JavascriptExecutor) driver;
//        js.executeScript("arguments[0].click();", loginBtn);
//    }
//
//    @Then("^user is on homepage$")
//    public void user_is_on_homepage() {
//        String title = driver.getTitle();
//        Assert.assertEquals("CRMPRO", title);
//    }
//
//    @Then("^user moves to new deal page$")
//    public void user_moves_to_new_contact_page() {
//        driver.switchTo().frame("mainpanel");
//        Actions actions = new Actions(driver);
//        actions.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//    }
//
//    @Then("^user enters deal details$")
//	public void user_enters_deal_details(DataTable dealData) {
//		for (Map<String, String> data : dealData.asMaps(String.class, String.class)) {
//			driver.findElement(By.id("title")).sendKeys(data.get("title"));
//			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
//			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
//			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
//			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//			//move to new deal page:
//			Actions action = new Actions(driver);
//			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//		}
//	}
//
//    @Then("^close the browser$")
//    public void close_the_browser() {
//        driver.quit();
//    }
//}
