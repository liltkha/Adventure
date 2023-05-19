Feature: I am chcekcing the chekcbox page

Scenario:[Test_1] Checking the page
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened

Scenario:[Test_2] Text box checking
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened
Then Elements should contain following fields
|Fields               |
|Text Box             |
|Check Box            |
|Radio Button         |
|Web Tables           |
|Buttons              |
|Links                |
|Broken Links - Images|
|Upload and Download  |
|Dynamic Properties   |

Scenario:[Test_3] Checking Text Box functunality
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened
When I click Text Box field
And fill all the fields
And Submit all data
# Then All the same filled data should appear in the buttom

Scenario: [Test_4] Check box checking
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened
When I click Check Box field
And I click home checkbox
Then It should add a writing 

Scenario: [Test_5] Check box checking
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened
When I click Check Box field
When I click plus option
Then It should be more options for checkbox
|fields|
|Desktop|
|Notes|
|Commands|
|Documents|
|WorkSpace|
|React|
|Angular|
|Veu|
|Office|
|Public|
|Private|
|Classified|
|General|
|Downloads|
|Word File.doc|
|Excel File.doc|


Scenario:[Test_6] Checking the page
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened
When I click radiobutton
Then I should be on that page and see a text

Scenario:[Test_7] Checking the page
Given I am on demoQa page
When I click elements
Then the checkbox page should be opened
When I click radiobutton
When I click yes
Then it should be text yes
When I click impressive
Then It should be text impressive

