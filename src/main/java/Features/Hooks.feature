Feature: Free CRM app test

Scenario: Free CRM create deal scenario
Given user is on deal page
When user fills the deals form
Then deal is created

Scenario: Free CRM create contact scenario
Given user is on contact page
When user fills the contact form
Then contact is created