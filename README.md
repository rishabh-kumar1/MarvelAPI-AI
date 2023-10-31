# Basic.SpaceChallenge
Basic.Space Marvel API Take Home Challenge

# AI/ML Take Home Project

> **Note**
>This is designed to be done with python.

## Getting started

> We recommend to fork this repository to your GitHub account before you get started, which makes it much easier to hand in the solution when you are done.

## Prerequisites

- Review the docs of the Marvel API https://developer.marvel.com/documentation/generalinfo.

- You will have to signup for a free account to get an API key. Go to http://developer.marvel.com/ 
and click on "Get a Key" in the header.

- Please have your public and private key from the "My Developer Account" page copied and ready 
to go. The URL is https://developer.marvel.com/account. If you are getting 500 errors, just click 
that link directly.

- Add the public and private key to your programming languages config file of choice in this project.

## Assignment

This assignment consists of 6 different steps, that are functionally related,and build upon each other.
For this assignment you have to clone this repository,
get the application running locally and then work on the code,
as you would with any other Elixir/Phoenix application.

### What is and isn't expected

- We don't expect you to complete all the steps.
The main goal of the assignment is to have some code we can talk about in our next call.
We don't want to use more of your free time than absolutely necessary.
The assignment is intended to take **up to 4 hours**, but not more.

- You do not need to do the setps in the exact order they are listed.

- The application should work out of the box.
No show-stopper kind of programming errors have been intentionally added to it.
However, we expect you to **fix any application/logic errors** that you come across.
We would love to discuss them in our next call.

- We expect you to do **local refactorings and small code improvements** as you see fit.

- Last but not least we expect you to **use Git** during the assignment.
Put your changes into appropriately sized commits,
just as if you were working in a collaborative environment. We will review these commits and 
changes as part of the pair review session.


## Goals
1. Fetch the characters from the Marvel API. Hint: You will use the URL http://gateway.marvel.com/v1/public/characters?[authenticated_params]

2. Render the characters in a grid view on the UI. We do not expect CSS expertise but a little CSS creativity does not hurt. We intentionally did not provide designs because this part is less important. The grid view should be of the character thumbnail images with the character names overlayed on the bottom of the thumbnail. Since the text is hard to read in some cases, be sure to include a background on the text with a slightly transparent gradient overlaying the thumbnail to make the white text pop on the image while maintaining the visibility of the image. Feel free to choose any front-end, iOS, Android, React Native, SPA framework or library (Elm, React, Vue, Svelte, etc), or server rendered HTML.

3. Now that we have characters displayed, we want to determine if this person is good, bad, or neutral. Let's  perform some machine-learning enrichments on the characters name and description to identify sentiments, other involved characters, etc. One idea is to start with a simple model that uses named-entity recognition to extract proper nouns and try to determine their hero, villan, or neutral stance. You may consider adding more data to enrich each character, such as the comics and stories they appear in if data is too limited.

4. Now render on each character grid item in the UI if the character is one of `hero`, `villan`, or `neutral` based on the output from your model(s).

5. You will notice that the API only gives us the first 20 results when we call it. Let's implement a pagination system to allow the users to see additional results in the UI.

6. Let's add some test coverage. We want to mock the API calls, test the front-end results, unit test the API authentication code, etc.

## Handing in the solution

- Once you are done, ensure you committed and pushed all your changes, and then you can send your solution directly by email to [garrett@basic.space](mailto:garrett@basic.space?subject=Basic.Space%20AI%2FML%20Assignment), for example, as a zip archive. Please make sure the solution contains the entire project, including the `.git` directory, so we can have a look at your commits.

- [Schedule a follow up review call](https://meetings.hubspot.com/garrett-tacoronte/technical-review-call) to go over your final implementation.
