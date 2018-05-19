---
layout: post
date:   2019-05-18 12:30:00
title:  "Making screensavers like it's 1995"
categories: [geek-talk]
tags: [tech, clojure, clojurescript, quil, art]
comments: true 

---
I'm not sure why it never occurred to me before to use code to create pretty visual things. Probably because of a long-standing aversion to CSS which I can only blame the Myspace era for.

But earlier this year I went to the [clojureD][clojureD] conference, where amid the many talks of AI, repls, automated testing, SPAs and so forth, was a presentation by Lisa Passing on interactive art. Effectively it was using Clojure to make coloured shapes wiggle around a screen. And no CSS in sight! I tend to end up writing Serious Business code for work, so the idea of making something pointless and fun was pretty exciting. I was inspired to give it a go.

The library is [Quil][quil]. It's a Clojure wrapper for [Processing][Processing], which is a Java-esque tool for creating 2D and 3D visuals. It's free and open-source! AND there's a Javascript port, [Processing.js][processing.js], which Quil also supports, all of which means you can write your Quil sketch using either Clojure or ClojureScript. Yay. I want to run my animation in the browser, so I'm using Clojurescript.

The Quil API is well documented, and there are an the abundance of Processing [tutorials][processing_tutorials]/[examples][processing_examples] available (though you'll have to figure out the Quil syntax from the Java code). It's also very straightforward just to create a blank canvas and start playing around with the multitude of different functions.

Point is, you can make nice things happen with very little effort, and it is incredibly fun and satisfying. Look:

<div>
    <canvas id="lines"></canvas>
    <script src="{{site.url}}/assets/main.js"></script>
    <script>lines.core.run_sketch()</script>
</div>

It's essentially a circle that moves from A to B along a randomly generated curve, and changes hue along the way. Thrilling, right? So far everything I've made bears some resemblence to a Windows 95 screensaver. The source code is on [github][twitchett/lines], for anyone interested.

Like a good developer, I also wrote some unit tests. This took about 20 times longer than writing the actual code (story of my life). Not the actual writing of the tests, which was a joy thanks to [cljs.test][cljs.test], but the setting up of the test tooling itself. Because the Clojurescript tools are not yet that mature, and the tests are running in Javascript-land (i.e. a browser), there is a lot of glueing together of parts to do, and much of it is left to the developer. But definitely an informative exercise, and definitely recommended.


[clojureD]: http://clojured.de/
[quil]: https://quil.info
[processing]: https://processing.org/
[processing.js]: http://processingjs.org/
[processing_tutorials]: https://processing.org/tutorials/
[processing_examples]: https://processing.org/examples/
[twitchett/lines]: https://github.com/twitchett/lines/blob/master/src/lines/core.cljs
[cljs.test]: https://clojurescript.org/tools/testing
