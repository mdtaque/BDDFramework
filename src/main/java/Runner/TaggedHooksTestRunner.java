package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/mdtaque/SELENIUM/FreeCRMBDDFramework/src/main/java/Features/TaggedHooks.feature",
        glue = {"stepDefinitions"},
        format = {"pretty", "html:test-output", "json:json_output/cucumber.xml", "junit:junit_xml/cucumber_xml"},
        dryRun = false,
        strict = false,
        monochrome = true
)

public class TaggedHooksTestRunner {
}
