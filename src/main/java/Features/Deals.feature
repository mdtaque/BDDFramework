Feature: New deal data creation


Scenario: Free CRM deat data test scenario

Given user is on login page
When title of login page is Free CRM
Then user enters username and password
| mdtaque | hay1hay1 |
Then user clicks on login button
Then user is on homepage
Then user moves to new deal page
Then user enters deal details
| test deal | 1000 | 50 | 10 |
Then close the browser