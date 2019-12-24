$(document).ready(function() {
  $('#submit').click(function(e) {
    e.preventDefault();
      ('#contact-form').attr(
      'action',
      'mailto:enscarpel@gmail.com');
