---
layout: page
title: About
permalink: /about/
pagetype: about
---

Hi! I'm Tabi.

I built this site mainly as a way to learn and experiment with new technologies, and also because I felt that being a web developer, I should probably have an actual website.

It's a Jekyll site with a React app thrown in for good measure, cobbled together with the help of some PHP and little bit of Ruby. It's served on Github pages, which I initially thought would make life simple, but in actual fact just resulted in having to write some messy bash scripts to get around their restrictions.

I'm always open to hearing about new projects. If you like what you see, get in touch!

<div>
  <form class="well form-horizontal contact_form" action=" " method="POST" id="contact_form">
    <div class="alert alert-success success_message" role="alert">Thanks! Your message has been submitted.</div>
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