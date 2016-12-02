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

const onGetAllCheeseplates = function () {
  console.log('list of all cheeseplates');
  api.getAllCheeseplates()
    .then(ui.getCheeseplatesSuccess)
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

const onUpdateCheeseplate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateCheeseplate(data)
    .then(ui.updateCheeseplateSuccess)
    .catch(ui.failure);
};

const onDeleteCheeseplate = function (event) {
  event.preventDefault();
  let id = $(this).data().cheeseplateId;
  console.log(id);
  api.deleteCheeseplate(id)
    .then(ui.deleteCheeseplateSuccess)
    .catch(ui.failure);
};



const addHandlers = () => {
  $('.get-all').on('click', onGetAllCheeses);
  // $('.get-one').on('click', onGetOneCheeseplate);
  $('.create-plate-form').on('submit', onCreateCheeseplate);
  $('.update-cheese-form').on('submit', onUpdateCheese);
  // $('.delete-button').on('click', onDeleteCheese);
  $('.poop').on('click', '.delete-button', onDeleteCheese);
  $('.get-plates').on('click', onGetAllCheeseplates);
};

module.exports = {
  addHandlers,
};
