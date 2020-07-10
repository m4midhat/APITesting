Feature: Testing API employees

  @Smoke
  Scenario: Testing API returns correct response
    When User calls employee API
    Then response code is 200
    And status is "success"
    And all users are returned