'use strict';

const app = require ('../app');

const success = (data) => {
  console.log(data);
  $('#myModal').modal('hide');
  $('#myModal3').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const signInSuccess = (data) => {
  console.log(data);
  app.user = data.user;
  $('#myModal2').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.change-pw').show();
  $('.sign-out').show();
};

const failure = (error) => {
  console.error('failing');
  $('#myModal').modal('hide');
  $('#myModal2').modal('hide');
  $('#myModal3').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const changePassword = () => {
  console.log ('Password changed');
  $('#myModal3').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const signOutSuccess = () => {
  app.user = null;
  console.log ('Signed out');
  $('.newest-plates').hide();
  $('.change-pw').hide();
  $('.sign-out').hide();
};


module.exports = {
  failure,
  success,
  signInSuccess,
  changePassword,
  signOutSuccess
};
