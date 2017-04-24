---
layout: null
---
$(document).ready(function () {

  /* Navigation / Header */

  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })


  $('.navigation .navigation__item.js_email').click(function (e) {
    e.preventDefault()
    window.location.href = "mailto:" + getEmail()
  })

  /* Contact form */

  var $form = $('#contact_form')
  $form.submit(function (e) {
    e.preventDefault()

    var address = getEmail()

    // TODO: validate email address

    $.ajax({
      url: "https://formspree.io/" + address,
      method: "POST",
      data: $form.serialize(),
      dataType: "json",
      success: function () {
        $('.success_message').slideDown({ opacity: "show" }, "slow")
        $form[0].reset()
      }
    })
  })


  function getEmail () {
    var p1 = "t.goodall"
    var p2 = "email"
    return p1 + "@" + p2 + ".com"
  }
})
