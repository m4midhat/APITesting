Feature: Book API is for returining a specific book details when bookid is passed
  Scenario Outline:
    When User calls book API with a <BookID>
    Then API returns the books details
    Then response code must be <response>
    Examples:
    |   BookID    |     response    |
    |   34        |     200         |
    |   45        |     200         |