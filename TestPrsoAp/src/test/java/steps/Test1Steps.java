package steps;

import Data.Response.Employee;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;

@Slf4j
public class Test1Steps {
  private Response response;
  private JsonPath jsonResponse;
  private String BaseURL = "http://dummy.restapiexample.com/api/v1/";
  private String route = "employees";

  @When("User calls employee API")
  public void userCallsEmployeeAPI() {
    response = RestAssured.given().contentType(ContentType.JSON)
            .when().get(BaseURL + route);
  }

  @Then("response code is {int}")
  public void responseCodeIs(int responseCode) {
    response.then().assertThat().statusCode(responseCode);
    jsonResponse = response.jsonPath();

  }

  @And("status is {string}")
  public void statusIs(String status) {
    log.info(jsonResponse.get("data[0]").toString());
    Assert.assertEquals(status, jsonResponse.get("status"));
  }

  @And("all users are returned")
  public void userVerification() {
    Employee[] employee = response.jsonPath().getObject("data", Employee[].class );
    for(int i =0;i<employee.length;i++){
      log.info(employee[i].getEmployee_name());
    }
    log.info("Length : " + employee.length);
    Assert.assertTrue(employee.length>0);
  }


}
