'use strict';

const app = require ('../../app');

const getCheesesSuccess = (data) => {
  console.log(data);
  // console.log("get game in uiakjdhkjahd");
  // $('.stats-message').text("You've played " + data.games.length + " games.");
};

// const getCheeseplateSuccess = (data) => {
//   console.log(data);
//   // console.log("get game in uiakjdhkjahd");
//   // $('.stats-message').text("You've played " + data.games.length + " games.");
// };

const success = () => {
  // debugger;
  console.log('create');
  $('#myModal4').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};
//
// const signInSuccess = (data) => {
//   console.log(data);
//   app.user = data.user;
//   $('#myModal2').modal('hide');
//   $('body').removeClass('modal-open');
//   $('.modal-backdrop').remove();
// };
//
const failure = () => {
  console.error('failing');
};
//
// const changePassword = () => {
//   console.log ('Password changed');
//   $('#myModal3').modal('hide');
//   $('body').removeClass('modal-open');
//   $('.modal-backdrop').remove();
// };
//
// const signOutSuccess = () => {
//   app.user = null;
//   // console.log ('Signed out');
// };


module.exports = {
  getCheesesSuccess,
  // getCheeseplateSuccess,
  failure,
  success,
  // signInSuccess,
  // changePassword,
  // signOutSuccess
};
