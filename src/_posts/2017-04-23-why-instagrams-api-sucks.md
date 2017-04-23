TL;DR version. Instagram's API sucks because:

1. It does not support CORS requests, only JSONP
2. It requires an OAUTH token to fetch publicly available content
3. Unless you're a brand, advertiser or publisher, you are *restricted to the latest 20 images*, and a *maximum of 10 users* can access your app

....

I built a little React app to display images from my Instagram stream. Writing React was fun; anything that toucheded Instagram's API was not. Now, after a few days of wrangling, I've just decided to sod the whole thing off and hack my own solution together.

It's not like I'm trying to do anything particularly ambitious - all I want I do is *fetch my own images* in order to display them on my own site. A simple requirement, right? Probably the most common use case for any client of their API.

So I go to the [instagram developer site][instagram_api] to register my app. It wants me to submit a URL that has my privacy policy. My privacy policy? For what? Protecting my own data from myself? Um, okay, whatever. I toss one together, register my client and move on.  

Then I come to the first thing that raises my suspicions about this API:

### It does not support CORS for client-side requests - only JSONP

Really? You don't support CORS? Didn't we all decide JSONP was an [insecure][jsonp_insecure] [dirty hack][jsonp_dirtyhack] back in 2010 - before Instagram was even a thing?

Well, using JSONP is icky, but by no means a showstopper. So I go and find a JSONP library (that hasn't been updated in years), and install that. Because of course [axios][axios], being a modern HTTP client, doesn't support outdated protocols.

Ok, what next. I check the endpoints to see what request I need to make, and - what's this? I need an OAUTH access token? To *access public content*?

### You need an OAUTH2 access token for **every** endpoint

So in other words, in order for any visitor to see the images on my site (which any anonymous user can view just by [going to my instagram page][]), they must:
a) have their own instagram account, and
b) grant my application access to their data.
Even though I absolutely do not need access to their data or to make any requests on their behalf.

This could raise privacy concerns and will seriously hamper the usability of my app, as users will have to login to see the gallery. 

But I doggedly persist. Thankfully the client-side OAUTH2 flow is pretty straightforward. Ok, access token granted. I make requests and fetch the data and display the images on the page. Yay!

Now, my app is in Sandbox mode, which means I'm restricted to fetching only the most recent 20 images, and only 10 users can actually access the app (through the OAUTH2 authentication). In order to lift these restrictions and get access to other functionality, I need to apply for a review, then I can "go live". That's pretty strict, but maybe they don't want kids abusing their API, or maybe they're just control freaks. In any case, I go to apply, and...well, poop.

### You must be a *brand*, *advertiser* or *publisher* in order to use the API outside of Sandbox mode

Basically, Instagram has made their API as close to useless as possible for your average joe developer who just wants to make requests and access content. You're rate-limited, you're user-limited, you're content-limited.

What's the point of even making an API available? I'm surprised that Instagram, as a child company of Facebook (that apparently has a very decent API), has taken these decisions in the implementation of their API.

In my frustration I've been exploring alternative solutions. Maybe I'll make a follow-up post with those findings...

[axios]: https://github.com/mzabriskie/axios
[instagram_api]: https://www.instagram.com/developer/
[jsonp_insecure]: https://en.wikipedia.org/wiki/JSONP#Security_concerns
[jsonp_dirtyhack]: https://cameronspear.com/blog/exactly-what-is-jsonp/
[my_instagram]: https://www.instagram.com/tabi.twitchett/