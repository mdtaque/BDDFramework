package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/mdtaque/SELENIUM/FreeCRMBDDFramework/src/main/java/Features/Tagging.feature",
        glue = {"stepDefinition"},
        format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
        dryRun = false,
        strict = false,
        monochrome = true,
        tags = {"~@SmokeTest", "~@RegressionTest"}
)

public class TaggingTestRunner {
}

//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest
