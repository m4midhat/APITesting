Feature: Testing put employee API

  @Smoke @TestBefore
  Scenario: Trying new API

    When User calls GET fake API
    Then fake response code is 200
    And  Data is returned
