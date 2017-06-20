# Routing in Angular

## Lesson Objectives

1. Create a new angular app
1. Clean up app HTML
1. Create About, Links, and Resume components
1. Edit the HTML for the About, Links, and Resume components
1. Display all components at once
1. Set up the router

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

## Edit the HTML for the About, Links, and Resume components

Edit `src/app/about/about.component.html`:

```html
<h2>This is the About Section of the Site</h2>
<h3>Early Life</h3>
<p>Just a kid growing up rough on the streets.  Hustlin' code for ca$h</p>
<h3>Career</h3>
<p>Now I'm makin' it raaaiiiiiinnnn!!!</p>
```

Edit `src/app/links/links.component.html`:

```html
<h2>This is the Links Section of the Site</h2>
<ul>
    <li>
        <a href="https://angular.io/">Angular Home Page</a>
    </li>
    <li>
        <a href="https://www.google.com/">Google</a>
    </li>
    <li>
        <a href="https://www.npmjs.com/">NPM</a>
    </li>
    <li>
        <a href="https://nodejs.org/en/">Node</a>
    </li>
</ul>
```

Edit `src/app/resume/resume.component.html`:

```html
<h2>Resume</h2>
<ul>
    <li>
        <dl>
            <dt>2010-2011, 2013-Present</dt>
            <dd>Crushed It</dd>
        </dl>
    </li>
    <li>
        <dl>
            <dt>2008-2010</dt>
            <dd>Chief Code Jockey at jockey.com</dd>
        </dl>
    </li>
    <li>
        <dl>
            <dt>2003-2008</dt>
            <dd>Software Engineer at Initech</dd>
        </dl>
    </li>
</ul>
```

## Display all components at once

Edit `src/app/app.component.html`:

```html
<h1>Welcome To My Personal Site</h1>
<app-about></app-about>
<app-links></app-links>
<app-resume></app-resume>
```

You should now see all components displayed on the page

## Set up the router

First import the RouterModule in to `src/app/app.module.ts`:

```javascript
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router'; // add import statement here
```

Now add the module as an import in `src/app/app.module.ts` and define which modules go with which routes:

```javascript
imports: [
  BrowserModule,
  RouterModule.forRoot([
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'resume',
      component: ResumeComponent
    },
    {
      path: 'links',
      component: LinksComponent
    }
  ])
],
```
