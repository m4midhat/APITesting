$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/BooksAPI.feature");
formatter.feature({
  "name": "Book API is for returining a specific book details when bookid is passed",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User calls book API with a \u003cBookID\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "API returns the books details",
  "keyword": "Then "
});
formatter.step({
  "name": "response code must be \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BookID",
        "response"
      ]
    },
    {
      "cells": [
        "34",
        "200"
      ]
    },
    {
      "cells": [
        "45",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User calls book API with a 34",
  "keyword": "When "
});
formatter.match({
  "location": "BookAPI.userCallsBookAPIWithABookID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the books details",
  "keyword": "Then "
});
formatter.match({
  "location": "BookAPI.apiReturnsTheBooksDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code must be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "BookAPI.responseCodeShouldBeInt(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User calls book API with a 45",
  "keyword": "When "
});
formatter.match({
  "location": "BookAPI.userCallsBookAPIWithABookID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the books details",
  "keyword": "Then "
});
formatter.match({
  "location": "BookAPI.apiReturnsTheBooksDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code must be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "BookAPI.responseCodeShouldBeInt(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Test1.feature");
formatter.feature({
  "name": "Testing API employees",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing API returns correct response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User calls employee API",
  "keyword": "When "
});
formatter.match({
  "location": "Test1Steps.userCallsEmployeeAPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Test1Steps.responseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status is \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "Test1Steps.statusIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all users are returned",
  "keyword": "And "
});
formatter.match({
  "location": "Test1Steps.userVerification()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Test2.feature");
formatter.feature({
  "name": "Testing create employee API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "API is creating new employee record",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User calls employee API with name \"Mike\" and salary 2500 and age 29",
  "keyword": "When "
});
formatter.match({
  "location": "Test2Steps.userCallsEmployeeAPIWithId(String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Test2Steps.responseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status should be \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "Test2Steps.statusShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body contains new employee with valid data",
  "keyword": "And "
});
formatter.match({
  "location": "Test2Steps.bodyContainsNewEmployeeWithValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Test4.feature");
formatter.feature({
  "name": "Testing put employee API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Trying new API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@TestBefore"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User calls GET fake API",
  "keyword": "When "
});
formatter.match({
  "location": "Test4Steps.userCallsGETFakeAPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fake response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Test4Steps.fakeResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Data is returned",
  "keyword": "And "
});
formatter.match({
  "location": "Test4Steps.dataIsReturned()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Test5.feature");
formatter.feature({
  "name": "Sample feature with background and scenario outline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Scenario with outline example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "user enters username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "response should be \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "response"
      ]
    },
    {
      "cells": [
        "\"user\"",
        "\"password\"",
        "1"
      ]
    },
    {
      "cells": [
        "\"user1\"",
        "\"pass\"",
        "2"
      ]
    },
    {
      "cells": [
        "\"wronguser\"",
        "\"123456\"",
        "3"
      ]
    }
  ]
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario with outline example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "user enters username \"user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userEntersUsernameUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userEntersPasswordPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userShouldBeLoggedIn(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario with outline example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "user enters username \"user1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userEntersUsernameUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userEntersPasswordPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should be 2",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userShouldBeLoggedIn(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario with outline example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "user enters username \"wronguser\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userEntersUsernameUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userEntersPasswordPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userShouldBeLoggedIn(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Scenario 2 with examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs task1 with variable \u003cvariable1\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User adds variable2 in \u003cvariable2\u003e in task",
  "keyword": "And "
});
formatter.step({
  "name": "User navigated to page \u003cpage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "variable1",
        "variable2",
        "page"
      ]
    },
    {
      "cells": [
        "\"string1\"",
        "101",
        "\"home\""
      ]
    },
    {
      "cells": [
        "\"string2\"",
        "111",
        "\"signup\""
      ]
    },
    {
      "cells": [
        "\"string3\"",
        "114",
        "\"admin\""
      ]
    },
    {
      "cells": [
        "\"string4\"",
        "356",
        "\"error\""
      ]
    }
  ]
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Scenario 2 with examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs task1 with variable \"string1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userPerformsTaskWithVariableVariable(int)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to invoke steps.Test3Steps.userPerformsTaskWithVariableVariable(int) in file:/C:/Users/HP/Downloads/TestPrsoAp2/TestPrsoAp/target/test-classes/, caused by java.lang.IllegalArgumentException: argument type mismatch\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:29)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.IllegalArgumentException: argument type mismatch\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\t... 35 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User adds variable2 in 101 in task",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userAddsVariableInVariableInTask(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigated to page \"home\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userNavigatedToPagePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Scenario 2 with examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs task1 with variable \"string2\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userPerformsTaskWithVariableVariable(int)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to invoke steps.Test3Steps.userPerformsTaskWithVariableVariable(int) in file:/C:/Users/HP/Downloads/TestPrsoAp2/TestPrsoAp/target/test-classes/, caused by java.lang.IllegalArgumentException: argument type mismatch\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:29)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.IllegalArgumentException: argument type mismatch\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\t... 35 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User adds variable2 in 111 in task",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userAddsVariableInVariableInTask(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigated to page \"signup\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userNavigatedToPagePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Scenario 2 with examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs task1 with variable \"string3\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userPerformsTaskWithVariableVariable(int)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to invoke steps.Test3Steps.userPerformsTaskWithVariableVariable(int) in file:/C:/Users/HP/Downloads/TestPrsoAp2/TestPrsoAp/target/test-classes/, caused by java.lang.IllegalArgumentException: argument type mismatch\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:29)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.IllegalArgumentException: argument type mismatch\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\t... 35 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User adds variable2 in 114 in task",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userAddsVariableInVariableInTask(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigated to page \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userNavigatedToPagePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Some pre-req steps",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user does any task",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userDoesAnyTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some response is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.someResponseIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Scenario 2 with examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user performs task1 with variable \"string4\"",
  "keyword": "When "
});
formatter.match({
  "location": "Test3Steps.userPerformsTaskWithVariableVariable(int)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to invoke steps.Test3Steps.userPerformsTaskWithVariableVariable(int) in file:/C:/Users/HP/Downloads/TestPrsoAp2/TestPrsoAp/target/test-classes/, caused by java.lang.IllegalArgumentException: argument type mismatch\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:29)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.IllegalArgumentException: argument type mismatch\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\t... 35 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User adds variable2 in 356 in task",
  "keyword": "And "
});
formatter.match({
  "location": "Test3Steps.userAddsVariableInVariableInTask(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigated to page \"error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3Steps.userNavigatedToPagePage(String)"
});
formatter.result({
  "status": "skipped"
});
});