package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Test3Steps {

  @Before("@TestBefore")
  public void inBefore(){
    log.info("*******In before scenario*******");
  }

  @After("@TestBefore")
  public void inAfter(){
    log.info("*******In after Scenario*******");
  }

  @When("user does any task")
  public void userDoesAnyTask() {
    log.info("In Background section");
    log.info("user does any task");
  }

  @Then("some response is shown")
  public void someResponseIsShown() {
    log.info("user does any task");
  }










  @And("user enters password {string}")
  public void userEntersPasswordPassword(String password) {
    log.info("password : " + password);
  }

  @When("user enters username {string}")
  public void userEntersUsernameUsername(String username) {
    log.info("username : " + username);
  }

  @Then("response should be {int}")
  public void userShouldBeLoggedIn(int response) {
    log.info("Response : " + response);
  }

  @When("user performs task1 with variable {string}")
  public void userPerformsTaskWithVariableVariable(int arg1) {
    log.info("User performs task with variable " + arg1);
  }

  @And("User adds variable2 in {int} in task")
  public void userAddsVariableInVariableInTask(int arg1) {
    log.info("User add variables in task " + arg1);
  }

  @Then("User navigated to page {string}")
  public void userNavigatedToPagePage(String PageName) {
    log.info("user is navigated to : " + PageName);
  }
}
