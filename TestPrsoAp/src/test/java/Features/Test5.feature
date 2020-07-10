Feature: Sample feature with background and scenario outline
  Background: Some pre-req steps
    When user does any task
    Then some response is shown

  @E2E
  Scenario Outline: Scenario with outline example
    When user enters username <username>
    And user enters password <password>
    Then response should be <response>
      Examples:
      | username | password | response|
      |"user"    | "password"|1       |
      |"user1"   |"pass"     |2       |
      |"wronguser"|"123456"  |3       |

    Scenario Outline: Test Scenario 2 with examples
      When user performs task1 with variable <variable1>
      And User adds variable2 in <variable2> in task
      Then User navigated to page <page>
      Examples:
      | variable1   |   variable2   |   page        |
      | "string1"   |   101         |   "home"      |
      | "string2"   |   111         |   "signup"    |
      | "string3"   |   114         |   "admin"     |
      | "string4"   |   356         |   "error"     |
