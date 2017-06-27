# Observables

## Lesson Objectives

1. Describe publish/subscribe model and how it relates to Observables

## Describe publish/subscribe model and how it relates to Observables

In programming pub/sub (publish/subscribe) model is a situation in which a single model publishes to the world that an event has happened.  Other models subscribe to this model and are notified when an event is published.  They can then do whatever they want with the new event data.  Think of this like when a newspaper publishes a new edition and subscribers read it.

A lot of times, communication between components is done through component properties (passing values in as custom attributes).  This can be a pain when you need to pass a property from a component to a grand child component.  Also, if you have multiple components that depend on that value, you'll need to pass it to all of them.  With a pub/sub model, you can simply have one component publish an event, and the other components are responsible for subscribing to the publisher.  This makes everything much more modular.

An observable is our publisher model.  It will broadcast events that happen, and we can then tell components to `subscribe` to this publisher.  They will be notified when an event happens, and they can choose to do what they want at this point.  The other thing our observables do is allow us to deal with streams of events.  We can perform operations on them to optimize the performance of our application.
