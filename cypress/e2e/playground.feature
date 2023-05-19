Feature: Overlapping elements
Scenario: Entering text into partially visible element
    Given I am on the Playground page
    When I scroll down to the input fields
    And I enter 111 into the ID input field
    And I enter "My name" into the Name input field
    And I scroll back up to the top 
    Then the Name input field should contain "My name"
Scenario: Check the "home" button
    Given I am on the Playground page
    When I click "home"
    Then It enters the "home" page
Scenario: Check the "resources" button
    Given I am on the Playground page
    When I click "resources"
    Then It enters the "resources" page
Scenario: Check is the Scenario
     Given I am on the Playground page
     When I check if Scenario exists
     Then it  contain "Scenario"
Scenario: Check is the Scenario elements 
     Given I am on the Playground page
     When  I Check if the Scenario elements exist
     Then it  contain rigth texts
                                                                                                                            