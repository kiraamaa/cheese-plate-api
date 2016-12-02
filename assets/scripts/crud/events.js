'use strict';

const getFormFields = require(`../../../lib/get-form-fields.js`);
const api = require('./api.js');
// const app = require('../../app.js');
const glob = require('./global.js');
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
    .then(ui.createCheeseplateSuccess)
    .catch(ui.failure);
  $('#myModal4').modal("hide");
};

const onUpdateCheese = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateCheese(data)
    .then(ui.updateCheeseSuccess)
    .catch(ui.failure);
};

const onDeleteCheese = function (event) {
  event.preventDefault();
  let id = $(this).data().cheeseId;
  console.log(id);
  api.deleteCheese(id)
    .then(ui.deleteCheeseSuccess)
    .catch(ui.failure);
};


const addHandlers = () => {
  $('.get-all').on('click', onGetAllCheeses);
  // $('.get-one').on('click', onGetOneCheeseplate);
  $('.create-plate-form').on('submit', onCreateCheeseplate);
  $('.update-cheese-form').on('submit', onUpdateCheese);
  // $('.delete-button').on('click', onDeleteCheese);
  $('.poop').on('click', '.delete-button', onDeleteCheese);
  // $('#myModal2').on('submit', onSignIn);
  // $('.sign-out-button').on('click', onSignOut);
  // $('#myModal3').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
