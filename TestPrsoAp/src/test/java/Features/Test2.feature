Feature: Testing create employee API

  @Smoke
  Scenario: API is creating new employee record
    When User calls employee API with name "Mike" and salary 2500 and age 29
    Then response code should be 200
    And status should be "success"
    And body contains new employee with valid data