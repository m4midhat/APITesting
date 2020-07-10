package steps;

import Data.Response.Books;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;


@Slf4j
public class BookAPI {

    String baseUrl = "https://fakerestapi.azurewebsites.net/authors/";
    String route = "books";
    private int bookId;
    private Response response;
    private JsonPath jsonResponse;

    @When("User calls book API with a {int}")
    public void userCallsBookAPIWithABookID(int BookID) {
        log.info("Calling book API with book id: " + BookID) ;
        bookId = BookID;
        response = RestAssured.given().contentType(ContentType.JSON).when().get(baseUrl + route+"/"+BookID);

    }

  @Then("API returns the books details")
  public void apiReturnsTheBooksDetails() throws IOException {
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
    int bookIdFromApi;
    Books[] books = objectMapper.readValue(response.getBody().asString(), Books[].class);
    for (int i = 0; i < books.length; i++) {
      {
        log.info(books[i].getFirstName());
        log.info(""+books[i].getIDBook());
        bookIdFromApi = books[i].getIDBook();
        Assert.assertEquals(bookIdFromApi,bookId);

      }
    }
        }


    @Then("response code must be {int}")
    public void responseCodeShouldBeInt(int ResponseCode) {
        response.then().assertThat().statusCode(ResponseCode);
        jsonResponse = response.jsonPath();

        log.info("Response Code : " +ResponseCode );
    Assert.assertEquals(200, ResponseCode);
    }
}
