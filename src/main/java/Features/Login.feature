Feature: Free CRM login feature


Scenario Outline: Free CRM login test scenario

Given user is on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on homepage
Then close the browser

Examples:

         | username | password |
         | mdtaque  | hay1hay1 |
         | hdhd     | nfjnn    |