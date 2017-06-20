# Using an API with AJAX

## Lesson Objectives

1. Create a new app
1. Generate a new component
1. Clean up app.component.html
1. Add search component to app
1. Add Form HTML to search component

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

Edit `src/app/app.component.html`:

```html
<h1>Star Wars Character Search App</h1>
<app-search></app-search>
```

## Add Form HTML to search component

Edit `src/app/search/search.component.html`:

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    <input type="text" placeholder="Character Name"/>
    <input type="submit" value="Search"/>
</section>
```
