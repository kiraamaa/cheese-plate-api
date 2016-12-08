'use strict';

const app = require ('../app');
// const getCheeses = require('../scripts/handlebars-templates/show-all-cheeses.handlebars');

const success = (data) => {
  console.log(data);
  $('#myModal').modal('hide');
  $('#myModal3').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.sign-up-message').hide();
  $('.sign-in-message').show();
  $('.newest-plates').show();
  // $('.create-new').css('pointer-events', 'auto');
};

const signInSuccess = (data) => {
  console.log(data);
  app.user = data.user;
  $('#myModal2').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.change-pw').show();
  $('.sign-out').show();
  $('.sign-up-message').hide();
  $('.sign-in-message').hide();
  $('.create-new').show();
  $('.newest-plates').show();
  // $('.cheeses-content').html(getCheeses(data));
  // $('.create-new').css('pointer-events', 'auto');
};

const failure = (error) => {
  console.error('failing');
  $('#myModal').modal('hide');
  $('#myModal2').modal('hide');
  $('#myModal3').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const changePasswordSuccess = () => {
  console.log ('Password changed');
  $('#myModal3').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

// const failure = (error) => {
//   console.error('failing');
//   $('#myModal').modal('hide');
//   $('#myModal2').modal('hide');
//   $('#myModal3').modal('hide');
//   $('body').removeClass('modal-open');
//   $('.modal-backdrop').remove();
// };

const signOutSuccess = () => {
  app.user = null;
  console.log ('Signed out');
  $('.newest-plates').hide();
  $('.list-group-item').hide();
  $('.change-pw').hide();
  $('.sign-out').hide();
  $('.sign-up-message').show();
  $('.create-new').hide();
};


module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
};
