# Observables

## Lesson Objectives

1. Describe publish/subscribe model and how it relates to Observables
1. Demonstrate when a normal promise is not optimal
1. Switch from a Promise to an Observable
1. Make typing into an input field an observable
1. Have a subscriber act only after a pause in events from an observable
1. Check for distinct events from an observable

## Describe publish/subscribe model and how it relates to Observables

In programming pub/sub (publish/subscribe) model is a situation in which a single model publishes to the world that an event has happened.  Other models subscribe to this model and are notified when an event is published.  They can then do whatever they want with the new event data.  Think of this like when a newspaper publishes a new edition and subscribers read it.

A lot of times, communication between components is done through component properties (passing values in as custom attributes).  This can be a pain when you need to pass a property from a component to a grand child component.  Also, if you have multiple components that depend on that value, you'll need to pass it to all of them.  With a pub/sub model, you can simply have one component publish an event, and the other components are responsible for subscribing to the publisher.  This makes everything much more modular.

An observable is our publisher model.  It will broadcast events that happen, and we can then tell components to `subscribe` to this publisher.  They will be notified when an event happens, and they can choose to do what they want at this point.  The other thing our observables do is allow us to deal with streams of events.  We can perform operations on them to optimize the performance of our application.

## Demonstrate when a normal promise is not optimal

We're going to be optimizing our star wars app from the previous day.

Firstly, we want it to search as the user types into the input (like how google autocompletes).  Edit the first `section` of `src/app/search.component.html`:

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    <input [(ngModel)]="name" type="text" placeholder="Character Name" (keyup)="findCharacter(name)" />
</section>
```

Test it out.  In the network tab of your Chrome Developer Tools, see how a request goes out for every letter?  This can use up data unnecessarily.  Also, the responses don't always come back in order.  With Observables, we can fix this.

## Switch from a Promise to an Observable

Nomally, `this.http.get()` returns an observable.  We convert it to a traditional promise with `toPromise()`.  Let's remove `toPromise()` and use the default functionality of `this.http.get()`.

In `src/app/search/search.component.ts` edit the `findCharacter` method of `SearchComponent`.

```javascript
findCharacter(name){
    this.http.get('http://swapi.co/api/people/?search=' + name)
        .subscribe(response => this.results = response.json().results);
}
```

Since we aren't using `toPromise` anymore, we can eliminate this line of code in `src/app/search/search.component.ts`

```javascript
import 'rxjs/add/operator/toPromise';
```

## Make typing into an input field an observable

`this.http.get()` returns an observable, but how can we make our own?  Let's make typing into the input field an observable action.  To do this, we'll need to import the `Subject` module from `rxjs` in `src/app/search/search.component.ts`:

```javascript
import { Subject } from 'rxjs/Subject'
```

A Subject, is just like an Observable, but it allows us to tell it when to publish events. Let's create a property on `SearchComponent` that is a `Subject` that we'll tell to publish events when the user types.

```javascript
export class SearchComponent implements OnInit {

    results;
    searchSubject = new Subject(); //add this property

    constructor(
        private http: Http
    ) { }

    findCharacter(name){
        this.http.get('http://swapi.co/api/people/?search=' + name)
            .subscribe(response => this.results = response.json().results);
    }

    ngOnInit() {
    }

}
```

In `findCharacter`, let's publish those events:

```javascript
findCharacter(name){
    this.searchSubject.next(name);
    this.http.get('http://swapi.co/api/people/?search=' + name)
        .subscribe(response => this.results = response.json().results);
}
```

Now we want to tell the `SearchComponent` to subscribe to those events that we publish with `this.searchSubject.next(name);`.  In `ngOnInit`, add this:

```javascript
ngOnInit() {
    this.searchSubject.subscribe(name => {
        console.log(name);
    })
}
```

When `SearchComponent` is initialized, it sets up a subscription to the `searchSubject` observable.  When `searchSubject` publishes an event, the code above logs the name that was written.

Instead of logging the name, though, we want to make an AJAX call.  Move the `this.http.get()` code into the `subscribe` callback:

```javascript
findCharacter(name){
    this.searchSubject.next(name);
}

ngOnInit() {
    this.searchSubject.subscribe(name => {
        this.http.get('http://swapi.co/api/people/?search=' + name)
            .subscribe(response => this.results = response.json().results);
    })
}
```

## Have a subscriber act only after a pause in events from an observable

Our setup is just as inefficient as before.  It still makes a request with every key stroke.  This is because our `searchSubject` observable is publishing a constant stream of events.  Each time a new character is typed, a new event is published.  Let's fine tune this so that our subscriber in `ngOnInit` waits until it receives an event that is followed by a certain amount of time.  This way, it's waiting for us to pause our typing.

To do this, we'll need to add the `debounce` functionality from `rxjs`.  To do this, we just run the following:

```javascript
import 'rxjs/add/operator/debounceTime';
```

Here's the definition of debounce:

> Bouncing is the tendency of any two metal contacts in an electronic device to generate multiple signals as the contacts close or open; debouncing is any kind of hardware device or software that ensures that only a single signal will be acted upon for a single opening or closing of a contact

It's kind of like what we're doing, right?

Now add `debounceTime` to the subscription in `ngOnInit()`:

```javascript
ngOnInit() {
    this.searchSubject
        .debounceTime(300) //add this
        .subscribe(name => {
            this.http.get('http://swapi.co/api/people/?search=' + name)
                .subscribe(response => this.results = response.json().results);
        })
}
```

Now try typing.  You should see that a request goes out only when you pause your typing.

## Check for distinct events from an observable

Try selecting the input with your cursor, typing in a value, and then hitting tab to make the cursor move away from the input box.  You should see a second request go out to the same location, even though the search value is the same as before.  Let's fix this.

Just like with `debounceTime`, we want to add the `distinctUntilChanged` ability.  This will examine the current event to see if it was the same as the previous event.  If it is, it will discard it.  Add the following:

```javascript
import 'rxjs/add/operator/distinctUntilChanged';
```

Now alter the subscriber in `ngOnInit`:

```javascript
ngOnInit() {
    this.searchSubject
        .debounceTime(300)
        .distinctUntilChanged() //add this
        .subscribe(name => {
            this.http.get('http://swapi.co/api/people/?search=' + name)
                .subscribe(response => this.results = response.json().results);
        })
}
```
