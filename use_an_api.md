# Using an API with AJAX

## Lesson Objectives

1. Create a new app
1. Generate a new component
1. Clean up app.component.html
1. Add search component to app
1. Add Form HTML to search component
1. Import Form functionality into the app
1. Set a component property to the value of an input
1. Invoke a function when the user clicks a button

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

## Import Form functionality into the app

Edit `src/app/app.module.ts` to import `FormsModule` and place it as an import:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms'; //import FormsModule

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule //add it as an import
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Set a component property to the value of an input

In `src/app/search/search.component.html`, add `[(ngModel)]` to the text input:

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    Search String: {{name}}
    <input [(ngModel)]="name" type="text" placeholder="Character Name"/>
    <input type="submit" value="Search"/>
</section>
```

Test this by changing the text in the input field

## Invoke a function when the user clicks a button

In `src/app/search/search.component.ts` add a `findCharacter` method to SearchComponent:

```javascript
findCharacter(name){
    console.log('finding ' + name);
}
```

Call it in `src/app/search/search.component.html` (also remove the `Search String:{{name}}` test code):

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    <input [(ngModel)]="name" type="text" placeholder="Character Name"/>
    <input (click)="findCharacter(name)" type="submit" value="Search"/>
</section>
```

Test this by looking in the console
