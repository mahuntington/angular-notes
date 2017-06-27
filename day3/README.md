# Observables

## Lesson Objectives

1. Describe publish/subscribe model and how it relates to Observables
1. Demonstrate when a normal promise is not optimal

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

Test it out.  In the network tab of your Chrome Developer Tools, see how a request goes out for every letter?  And they don't always come back in order, either.  With Observables, we can fix this.
