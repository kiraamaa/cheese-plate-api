'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./scripts/example.js');

const authEvents = require('../auth/events.js');
const crudEvents = require('./crud/events.js');


// On document ready
$(() => {
  console.log('adding event handlers');
  authEvents.addHandlers();
  crudEvents.addHandlers();
  $('.dropdown-toggle').dropdown();
  $('#begin-text').css("color", "white");
  $('.update-cheese-form').show();
  $('.change-pw').hide();
  $('.sign-out').hide();
});
