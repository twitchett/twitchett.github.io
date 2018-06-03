---
layout: page
title: About
permalink: /about/
pagetype: about
---

Hi! I'm Tabi.

I built this site mainly as a way to learn and experiment with new technologies, and also because I felt that being a web developer, I should probably have an actual website.

I like lots of things other than coding: [books][goodreads], video games, moderate veganism, pretty much any form of physical activity (running, swimming, climbing, lifting...), traveling, being outdoors, drawing, quirky TV shows, music (especially electronic breaks - think Underworld, Leftfield...)

I'm always open to hearing about new projects. If you like what you see, get in touch!

[goodreads]: https://www.goodreads.com/user/show/14729951-tabi

<div>
  <form class="well form-horizontal contact_form" action=" " method="POST" id="contact_form">
    <div class="alert alert-success success_message" role="alert">Thank you come again!</div>
    <fieldset>
      <!-- Text input-->
      <div class="form-group">
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input name="name" placeholder="name" class="form-control" type="text"/>
          </div>
        </div>
      </div>
      <!-- Text input-->
      <div class="form-group">
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
            <input name="email" placeholder="e-mail" class="form-control" type="text"/>
          </div>
        </div>
      </div>
      <!-- Text area -->
      <div class="form-group">
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
            <textarea class="form-control" name="comment" placeholder="Say something"></textarea>
          </div>
        </div>
      </div>
      <!-- Success message -->
      <!-- Button -->
      <div class="form-group">
        <div class="col-md-8">
          <button type="submit" class="btn btn-warning">Send <span class="glyphicon glyphicon-send"></span></button>
        </div>
      </div>
    </fieldset>
  </form>
</div>