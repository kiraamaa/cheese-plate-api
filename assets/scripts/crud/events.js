'use strict';

// const getFormFields = require(`../../lib/get-form-fields.js`);
const api = require('./api.js');
const app = require('../../app.js');
const ui = require('./ui.js');

const onGetAllCheeses = function () {
  console.log('list of all cheeses');
  api.getAllCheeses()
    .then(ui.getCheesesSuccess)
    .catch(ui.failure);
};

// const onGetOneCheeseplate = function () {
//   console.log('one cheeseplate');
//   api.getOneCheeseplate()
//     .then(ui.getCheeseplateSuccess)
//     .catch(ui.failure);
// };

const onCreateCheeseplate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // debugger;
  api.createCheeseplate(data)
    .then(ui.success)
    .catch(ui.failure);
  $('#myModal4').modal("hide");
};

// const onSignUp = function (event) {
//   let data = getFormFields(event.target);
//   event.preventDefault();
//   api.signUp(data)
//     .then(ui.success)
//     .catch(ui.failure);
//   $('#myModal').modal("hide");
// };
//
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
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//     .then(ui.success)
//     .catch(ui.failure);
//   $('#myModal3').modal("hide");
// };

const addHandlers = () => {
  $('.get-all').on('click', onGetAllCheeses);
  // $('.get-one').on('click', onGetOneCheeseplate);
  $('.create-plate-form').on('submit', onCreateCheeseplate);
  // $('#myModal2').on('submit', onSignIn);
  // $('.sign-out-button').on('click', onSignOut);
  // $('#myModal3').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
