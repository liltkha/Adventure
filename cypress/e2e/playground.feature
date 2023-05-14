Feature: Overlapping elements

  Background:
    Given I am on the Playground page

  Scenario: Entering text into partially visible Name element
    When I scroll down to the field
    And I enter "584" into the ID input field
    And I enter "Santorini" into the Name input field
    And I scroll back up to the top
    Then the Name input field should contain "Santorini"
  

  Scenario: Entering text into partially visible Subject element
    When I delete the box
    And I enter "104" into the ID input field
    And I enter "Qerob" into the Name input field
    And I scroll down to the input fields
    Then the Subject input  field should contain "Norman"
    And the Name input field should contain "Qerob"
    