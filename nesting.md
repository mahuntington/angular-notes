# Nesting

## Lesson Objectives

1. Describe nested routes
1. Create components for two sub sections
1. Move the appropriate HTML to each sub section component

## Describe nested routes

Sometimes you want to have sub sections within a specific route (routes within routes).  We can accomplish this with nested routes.

## Create components for two sub sections

We're going to split `/about` into `/about/early-life` and `/about/career`.

Generate the two components:

```
ng generate component early-life
ng generate component career
```

## Move the appropriate HTML to each sub section component

Cut the HTML from `src/app/about/about.component.html` and paste into `src/app/early-life/early-life.component.html`:

```html
<h3>Early Life</h3>
<p>Just a kid growing up rough on the streets.  Hustlin' code for ca$h</p>
```

and `src/app/career/career.component.html`:

```html
<h3>Career</h3>
<p>Now I'm makin' it raaaiiiiiinnnn!!!</p>
```
