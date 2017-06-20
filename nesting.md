# Nesting

## Lesson Objectives

1. Describe nested routes
1. Create components for two sub sections
1. Move the appropriate HTML to each sub section component
1. Create a router just for the sub sections

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

## Create a router just for the sub sections

Create `src/app/about/about-routing.module.ts`:

```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { EarlyLifeComponent } from '../early-life/early-life.component';
import { CareerComponent } from '../career/career.component';

const aboutRoutes: Routes = [
    {
        path: 'about', //note the path for the main section
        component: AboutComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: 'early-life',
                component: EarlyLifeComponent
            },
            {
                path: 'career',
                component: CareerComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }
```
