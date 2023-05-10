Feature: Overlapping elements

  Scenario: Entering text into partially visible element
    Given I am on the Playground page
    When I scroll down to the input fields
    And I enter 111 into the ID input field
    And I enter "My name" into the Name input field
    And I scroll back up to the top 
    Then the Name input field should contain "My name"

#   Scenario: Scrolling to partially visible element
#     Given I am on the Playground page
#     When I try to scroll to the partially visible element
#     Then the element should become fully visible on the page.