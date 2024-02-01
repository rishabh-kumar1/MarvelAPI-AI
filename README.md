Marvel API Challenge

> **Note**
>This was designed as a React app that relies on a Flask based POST endpoint. To run this project out of the box, one needs to have two terminals open (two different ports).
> Run "npm install" in the "marvel-character-grid" folder to install necessary react/jsx libraries.
> You should then be able to run "npm start" to build and run the react app.
> In a seperate terminal, navigate to the root level folder "ai-ml-basicSpace", and run "python app.py"
> You should now be able to open a browser at the port url, in my case "http://localhost:3000/" to see the react ui rendering.
> My flask endpoint was running on "http://localhost:5000/classify", which is currently hardcoded into the axios api call. You might need to change this to reflect the actual port its being served on!
>   Some of the images being served from the Marvel API are "Not Available" on their end. Thus some character grid containers contain the error code "Image Not Found".

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

## Goals
1. Fetch the characters from the Marvel API. Hint: You will use the URL http://gateway.marvel.com/v1/public/characters?[authenticated_params]

2. Render the characters in a grid view on the UI. We do not expect CSS expertise but a little CSS creativity does not hurt. We intentionally did not provide designs because this part is less important. The grid view should be of the character thumbnail images with the character names overlayed on the bottom of the thumbnail. Since the text is hard to read in some cases, be sure to include a background on the text with a slightly transparent gradient overlaying the thumbnail to make the white text pop on the image while maintaining the visibility of the image. Feel free to choose any front-end, iOS, Android, React Native, SPA framework or library (Elm, React, Vue, Svelte, etc), or server rendered HTML.

3. Now that we have characters displayed, we want to determine if this person is good, bad, or neutral. Let's  perform some machine-learning enrichments on the characters name and description to identify sentiments, other involved characters, etc. One idea is to start with a simple model that uses named-entity recognition to extract proper nouns and try to determine their hero, villan, or neutral stance. You may consider adding more data to enrich each character, such as the comics and stories they appear in if data is too limited.

4. Now render on each character grid item in the UI if the character is one of `hero`, `villan`, or `neutral` based on the output from your model(s).

5. You will notice that the API only gives us the first 20 results when we call it. Let's implement a pagination system to allow the users to see additional results in the UI.

6. Let's add some test coverage. We want to mock the API calls, test the front-end results, unit test the API authentication code, etc.

