Feature: Alerts, Frames and Windows Feature
@AlertsFramesWindows
Scenario: To perform actions on Alerts, Frames and Windows
Given User perform actions on New Tab page
When User perform actions on New Window page
Then User navigates to New Window Page and verify the text
Then User perform actions on New Window Message page
Then User navigates to New Window Message Page and verify the text
Then User navigates to Alerts Page
Then User navigates to Frames Page