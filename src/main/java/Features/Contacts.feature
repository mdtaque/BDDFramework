Feature: Free CRM create contacts


Scenario Outline: Free CRM create contacts test scenario
Given user is on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on homepage
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:

         | username | password | firstname | lastname | position |
         | mdtaque  | hay1hay1 | Stephen   | King     | MD       |
         | mdtaque  | hay1hay1 | Robert    | Miles    | Manager  |