package steps;

import Data.Request.Employee;
import Data.Response.NewEmployee;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.junit.Assert;

@Slf4j
public class Test2Steps {
  static private Response response;
  static private JsonPath jsonResponse;
  private String BaseURL = "http://dummy.restapiexample.com/api/v1/";
  private String route = "create";
  private JSONObject requestParams;
  NewEmployee responseEmployee;
  Employee employee = new Employee();

  @When("User calls employee API with name {string} and salary {int} and age {int}")
  public void userCallsEmployeeAPIWithId(String name, int salary, int age) {
    requestParams = new JSONObject();

    employee.setEmployee_name(name);
    employee.setEmployee_salary(salary);
    employee.setEmployee_age(age);

    requestParams.put("name", name);
    requestParams.put("salary", salary);
    requestParams.put("age", age);
    response = RestAssured.given().contentType(ContentType.JSON).body(requestParams)
            .when().post(BaseURL + route);
  }

  @Then("response code should be {int}")
  public void responseCodeIs(int code) {
    response.then().assertThat().statusCode(code);
    log.info(response.getBody().asString());
    jsonResponse = response.jsonPath();


  }

  @And("status should be {string}")
  public void statusShouldBe(String status) {
    log.info("Status : " + jsonResponse.get("status"));
    Assert.assertEquals(status, jsonResponse.get("status"));
  }

  @And("body contains new employee with valid data")
  public void bodyContainsNewEmployeeWithValidData() {
    responseEmployee = response.jsonPath().getObject("data", NewEmployee.class );
    log.info("Name : " + jsonResponse.get("data.name"));
    log.info("Name : " + responseEmployee.getName());
    Assert.assertEquals(employee.getEmployee_name(), responseEmployee.getName());
  }


}
