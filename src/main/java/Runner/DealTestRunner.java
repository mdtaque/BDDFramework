package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/mdtaque/SELENIUM/FreeCRMBDDFramework/src/main/java/Features/Deals.feature",
        glue = {"stepDefinitions"},
        format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
        dryRun = false,
        strict = false,
        monochrome = true
        )

public class DealTestRunner {
}
