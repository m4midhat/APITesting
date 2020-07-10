package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/Features",
        glue={"steps"},//tags = {"~@Smoke"},
        plugin = { "html:target/cucumber-html-reports","pretty"}
)
public class TestRunner {
}
