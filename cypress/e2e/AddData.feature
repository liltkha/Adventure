Feature: Add user data I am on the page

  Scenario: Click on the Add button 
    Given I am on the page
    When I press the button
    Then  The popup should  be opened


 Scenario: Check the popup content 
    Given I am on the page
    When I press the button
    Then  The popup should  be opened
    And The popup should contain the following labels
    |labels    |
    |First Name| 
    |Last Name | 
    |Email     | 
    |Age       |
    |Salary    |
    |Department|

    Scenario: Check the Registration form 
    Given I am on the page
    When I press the button
    And  The popup should  be opened
    When I fill all fields
    When I click on the Submit button
    Then An appropriate column should be added in the table