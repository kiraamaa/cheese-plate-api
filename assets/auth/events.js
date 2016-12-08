'use strict';

const getFormFields = require(`../../lib/get-form-fields.js`);
const api = require('./api.js');
const ui = require('./ui.js');
const capi = require('../scripts/crud/api.js');
const cui = require('../scripts/crud/ui.js');


const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
  $('#myModal').modal("hide");
};

// const onSignIn = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   console.log(data);
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.failure);
//   console.log('click');
//   $('#myModal2').modal("hide");
// };

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.signIn(data)
    .then((response_data) => {
      ui.signInSuccess(response_data);
      return capi.getAllCheeses();
    })
    .then(cui.getCheesesSuccess)
    .catch(ui.failure);
  console.log('click');
  $('#myModal2').modal("hide");
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure);
  $('#myModal3').modal("hide");
};


const addHandlers = () => {
  $('#myModal').on('submit', onSignUp);
  $('#myModal2').on('submit', onSignIn);
  $('.sign-out-button').on('click', onSignOut);
  $('#myModal3').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
