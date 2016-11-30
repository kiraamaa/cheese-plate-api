'use strict';

// const app = require ('../app');

const success = (data) => {
  console.log(data);
  $('#myModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const signInSuccess = (data) => {
  // console.log(data);
  app.user = data.user;
};

const failure = (error) => {
  console.error('failing');
};

const changePassword = () => {
  // console.log ('Password changed');
};

const signOutSuccess = () => {
  app.user = null;
  // console.log ('Signed out');
};


module.exports = {
  failure,
  success,
  signInSuccess,
  changePassword,
  signOutSuccess
};
