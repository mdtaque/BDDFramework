$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mdtaque/SELENIUM/FreeCRMBDDFramework/src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Free CRM create contacts test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario;;1"
    },
    {
      "cells": [
        "mdtaque",
        "hay1hay1",
        "Stephen",
        "King",
        "MD"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario;;2"
    },
    {
      "cells": [
        "mdtaque",
        "hay1hay1",
        "Robert",
        "Miles",
        "Manager"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM create contacts test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"mdtaque\" and \"hay1hay1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Stephen\" and \"King\" and \"MD\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 3205466290,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 15950391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mdtaque",
      "offset": 13
    },
    {
      "val": "hay1hay1",
      "offset": 27
    }
  ],
  "location": "ContactStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 677712779,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2059822222,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 11717256,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1151403673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stephen",
      "offset": 29
    },
    {
      "val": "King",
      "offset": 43
    },
    {
      "val": "MD",
      "offset": 54
    }
  ],
  "location": "ContactStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1033254825,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 158689278,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM create contacts test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-contacts-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"mdtaque\" and \"hay1hay1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Robert\" and \"Miles\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 2066279353,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 18811463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mdtaque",
      "offset": 13
    },
    {
      "val": "hay1hay1",
      "offset": 27
    }
  ],
  "location": "ContactStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 662662300,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1321928711,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 8434220,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 717938193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 29
    },
    {
      "val": "Miles",
      "offset": 42
    },
    {
      "val": "Manager",
      "offset": 54
    }
  ],
  "location": "ContactStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1047622749,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 155765266,
  "status": "passed"
});
});