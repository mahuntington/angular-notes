# URL Params

## Lesson Objectives

1. Define what URL params are
1. Create an external data file
1. Use the data file to generate links

## Define what URL params are

URL params allow us to pass data into the application from the URL

## Create an external data file

Now we're going to have how app be a little more data driven.  Create `src/app/resume/jobs.ts`:

```javascript
export const JOBS = [
    {
        id:1,
        title: 'Software Engineer',
        location: 'Initech',
        dates: '2003-2008',
        description: 'I HAVE PEOPLE SKILLS!!'
    },
    {
        id:2,
        title: 'Chief Code Jockey',
        location: 'jockey.com',
        dates: '2008-2010',
        description: 'Taming the wild code beast. A story for all ages. A friendship for all time. Share the adventure.'
    },
    {
        id:3,
        title: 'Crushed It',
        dates: '2010-2011, 2013-Present',
        description: 'There was a medical situation preventing me from crushing it to my usual standards. So I had to take some time off until I was able to crush it at 100%, at which point I resumed crushing it full-time.'
    }
]
```

## Use the data file to generate links
