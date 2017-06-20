# Routing in Angular

## Lesson Objectives

1. Create a new angular app
1. Clean up app HTML
1. Create About, Links, and Resume components

## Create a new angular app

First create a new app using

```
ng new router
```

Now, `cd` into the new directory and start serving the app

```
cd router
ng serve --open
```

You should now see the welcome screen

## Clean up app HTML

Go into `src/app/app.component.html` and change the HTML to:

```html
<h1>Welcome To My Personal Site</h1>
```

## Create About, Links, and Resume components

We'll create a component for the different "sections" of the site we want to "navigate" to.

```
ng generate component about
ng generate component links
ng generate component resume
```
