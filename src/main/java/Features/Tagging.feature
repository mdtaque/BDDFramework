@FunctionalTest
Feature: Free CRM application testing

@SmokeTest
Scenario: Login with correct username and correct password
Given This is a valid login test

@RegressionTest
Scenario: Login with incorrect username and incorrect password
Given This is an invalid login test

@SmokeTest
Scenario: Create a contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a deal test case

@EndToEndTest
Scenario: Create a task
Given This is a task test case

@SmokeTest @RegressionTest
Scenario: Search a deal
Given This is a search deal test

@EndToEndTest
Scenario: Search a contact
Given This is a search contact test

@RegressionTest
Scenario: Search a task
Given This is a search task test

@EndToEndTest
Scenario: Search a call
Given This is a search call test

@RegressionTest @EndToEndTest
Scenario: Create an email
Given This is a search email test

