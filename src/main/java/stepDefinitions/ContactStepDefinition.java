package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ContactStepDefinition {

    public static WebDriver driver;

    @Given("^user is on login page$")
    public void user_is_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "/Users/mdtaque/SELENIUM/FreeCRMBDDFramework/driver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.freecrm.com/index.html");
    }

    @When("^title of login page is Free CRM$")
    public void title_of_login_page_is_Free_CRM() {
        String title = driver.getTitle();
        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
    }

    @Then("^user enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_username_and_password(String username, String password){
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() {
        WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);
    }

    @Then("^user is on homepage$")
    public void user_is_on_homepage() {
        String title = driver.getTitle();
        Assert.assertEquals("CRMPRO", title);
    }

    @Then("^user moves to new contact page$")
    public void user_moves_to_new_contact_page() {
        driver.switchTo().frame("mainpanel");
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
    }

    @Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_contact_details_and_and(String firstname, String lastname, String position) {
        driver.findElement(By.id("first_name")).sendKeys(firstname);
        driver.findElement(By.id("surname")).sendKeys(lastname);
        driver.findElement(By.id("company_position")).sendKeys(position);
        driver.findElement((By.xpath("//input[@type='submit']"))).click();
    }

    @Then("^close the browser$")
    public void close_the_browser() {
        driver.quit();
    }
}