package steps;


import Data.Response.Activity;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;

import java.io.IOException;
import java.util.List;

@Slf4j
public class Test4Steps {
  String baseUrl = "https://fakerestapi.azurewebsites.net/api/";
  String route = "Activities";
  private Response response;
  private JsonPath jsonResponse;

  @When("User calls GET fake API")
  public void userCallsGETFakeAPI() {
    response = RestAssured.given().contentType(ContentType.JSON).when().get(baseUrl + route);
    log.info("Calling API");
  }

  @Then("fake response code is {int}")
  public void fakeResponseCodeIs(int responseCode) {
    response.then().assertThat().statusCode(responseCode);
    jsonResponse = response.jsonPath();
  }

  @And("Data is returned")
  public void dataIsReturned() throws IOException {
    /*ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);

    Activity[] activities = objectMapper.readValue(response.getBody().asString(), Activity[].class);*/



    log.info(jsonResponse.get("[0].Title").toString());

    Activity[] activities = response.jsonPath().getObject("", Activity[].class );
    log.info("Length : " + activities.length);
    for(int i =0;i<activities.length;i++){
      log.info(activities[i].getTitle());
    }
    log.info("Length : " + activities.length);
    Assert.assertTrue(activities.length>0);
  }
}