Feature: As a person who loves friday, I want to be able to be sure when it is

# Scenario: Sunday isn't friday
# Given today is Sunday
# When I ask whether it's Friday yet
# Then I should be told "Nope"

# Scenario: Friday is Friday
# Given today is Friday
# When I ask whether it's Friday yet
# Then I should be told TGIF


Scenario Outline: Today is or is not Friday
Given today is "<day>"
When I ask whether it's Friday yet
Then I should be told "<answer>"

Examples:
|day            | answer |
|Friday         | TGIF   |
|Sunday         | Nope   |
|anything else! | Nope   | 


