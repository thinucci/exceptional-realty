$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });


  

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });






  ////////// CONTACT FORM VALIDATION /////

  function validateName(fullname){

    if (fullname.length > 2) {
      //all good! 
      $('#fullname').removeClass('error');
      $('#fullname-error').hide();
      return true;
    } 

    else {
      //fail
      $('#fullname').addClass('error');
      $('#fullname-error').show();
      return false;
    }
  }

  ////validate Name function ^^^

  function validateEmail(email){

    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
    if(re.test(email)) {
      $('#email').removeClass('error');
      $('#email-error').hide();
      return true;

    }

    else{
      $('#email').addClass('error');
      $('#email-error').show();
      return false;

    }
  }

  ////validate Email function ^^^

  function validateMessage(message){
    if(message.length > 0) {
      $('#message').removeClass('error');
      $('#message-error').hide();
      return true;

    }

    else{
      $('#message').addClass('error');
      $('#message-error').show();
      return false;

    }

  }

   ////validate Message function ^^^

   /////Final test for form submission

  $('form').submit(function(event) {
    
    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim($('#message').val());

    if (validateName (fullname) & validateEmail (email) & validateMessage(message)) {
      return true; //submits form
    } 
    else {
      event.preventDefault(); // prevents form submission

    }

  });

});