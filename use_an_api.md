# Using an API with AJAX

## Lesson Objectives

1. Create a new app
1. Generate a new component
1. Clean up app.component.html
1. Add search component to app

## Create a new app

```
ng new starwars
cd starwars
ng serve --open
```

## Generate a new component

```
ng generate component search
```

## Clean up app.component.html

Set `src/app/app.component.html` contents to:

```html
<h1>Star Wars Character Search App</h1>
```

## Add search component to app

```html
<h1>Star Wars Character Search App</h1>
<app-search></app-search>
```
