# Exercises with code bases

## Adding a Feature

Look around [the comments app](comments/).  This is just a basic app that displays a list of comments.  You may need to run `npm install` for it to work.

- Alter it so that each comment has an author, represented by a string.
- Add a feature that allows you to add more comments
    - This should be all within the same component
    - Visually, it should consist of two text inputs (one for author, one for comment) and a submit button
- Add a feature that allows you to delete comments
- Add a feature that allows you to edit comments
    - You should be able to click on a comment, and the text will be replaced by two text inputs (one for author, one for comment)

## Changing a Feature

Look again at what you did in [the comments app](comments/).  It's all in one component, which isn't very modular.  Put the list of comments into one component and put the new comments form into another component.  Use observables to communicate between the two.

At the moment, there's no styling.  Add some by incorporating [Bootstrap](http://getbootstrap.com/), [Materialize](http://materializecss.com/), or [Skeleton](http://getskeleton.com/).  Feel free to write your own CSS as an alternative to using one of the above CSS frameworks.

## Fixing Bugs

Someone has hacked up the [Tour Of Heroes](https://angular.io/tutorial/toh-pt5) demo from google!  Go into [heroes](heroes/), run `npm install` and `npm start` to start the app.  Try to fix all the errors so that it works like [this](https://embed.plnkr.co/?show=preview).  Try not to look at the code listed in the previous link, unless you're absolutely stumped.