'use strict';

const getFormFields = require(`../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
  console.log(data);
};

// const onSignIn = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.failure);
//   console.log('click');
  // $('#myModal2').modal("hide");
  // $('.sign-message').hide();
  // $('.new-message').show();
//};
//
// const onSignOut = function (event) {
//   event.preventDefault();
//   api.signOut()
//     .then(ui.success)
//     .catch(ui.failure);
// };
//
// const onChangePassword = function (event) {
//   event.preventDefault();
//   let data = getFormFields(this);
//   api.changePassword(data)
//     .then(ui.success)
//     .catch(ui.failure);
//   $('#myModal3').modal("hide");
// };

const addHandlers = () => {
  // $('.sign-up-form').on('submit', onSignUp);
  $('#on-form-submit').on('click', onSignUp);
//   $('.sign-out-button').on('click', onSignOut);
//   $('.change-password-form').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
