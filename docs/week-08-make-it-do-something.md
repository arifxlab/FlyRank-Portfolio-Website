# Week 08 — Make It Do Something

## What is a backend?

A backend is the part of an application that handles data and operations that should not happen only in the user's browser. It receives information, processes it, stores it or sends it to another service, and returns a result.

In my contact form, I use Netlify Forms as the backend service instead of building my own server.

## What does my feature do?

I added one dynamic feature to my portfolio: a working contact form.

A visitor can enter their name, email address, and message and submit the form. The submission is sent to Netlify Forms, where I can see the real submission in my Netlify dashboard.

The feature also gives the visitor feedback. While the form is being submitted, the button shows a sending state. When the request succeeds, the visitor sees a success message. If something fails, the form shows an error message.

## How does the data flow?

The flow is:

```text
Visitor
   ↓
React Contact Form
   ↓
Form data is encoded
   ↓
POST request to Netlify
   ↓
Netlify Forms processes the submission
   ↓
Submission appears in my Netlify dashboard
```

The form sends three main pieces of data:

* Name
* Email
* Message

I also added a hidden honeypot field for basic spam filtering.

The important thing I learned is that a dynamic feature is not just a form on the screen. The complete feature requires the frontend to collect the data, send it somewhere that can process it, and produce a real result. I tested this with my live portfolio and confirmed that the submission was successfully received by Netlify.
