Feature: Login page

  Background:
    Given I am on the Login page
        Scenario:[TS1] Successful login:
        When I enter a valid username and password
        Then I click the login button
  

       Scenario: [TS2] Invalid username:
        When I enter an invalid username
        And I enter a valid password
        And I click on the login button
        Then I should see an error message
        And I should remain on login page

        Scenario: [TS3] Invalid password:
        When I enter a valid username
        And I enter an invalid password
        And I click login button
        Then I should see error message
        And I should remain on the login page

    
