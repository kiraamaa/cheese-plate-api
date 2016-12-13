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

const onUpdateCheeseplate = function (event) {
  event.preventDefault();
  // let id = $(this).data().cheeseplateId;
  let id = event.target.getAttribute('data-cheeseplate-id');
  console.log("this is cheeseplate", id);
  let data = getFormFields(event.target);
  api.updateCheeseplate(id, data)
    .then((response_data) => {
      ui.updateCheeseplateSuccess(response_data);
      return api.getAllCheeseplates();
    })
    .then(ui.updateCheeseplateSuccess)
    .catch(ui.updateCheeseplateFailure);
};

const onGetAllCheeseplates = function () {
  event.preventDefault();
  console.log('list of all cheeseplates');
  api.getAllCheeseplates()
    .then(ui.getCheeseplatesSuccess)
    .catch(ui.failure);
};

const onCreateCheeseplate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // debugger;
  api.createCheeseplate(data)
    .then((response_data) => {
      ui.createCheeseplateSuccess(response_data);
      return api.getAllCheeseplates();
    })
    .then(ui.getCheeseplatesSuccess)
    .catch(ui.failure);
  $('#myModal4').modal("hide");
};

const onDeleteCheeseplate = function (event) {
  event.preventDefault();
  let id = $(this).data().cheeseplateId;
  console.log(id);
  api.deleteCheeseplate(id)
    .then((response_data) => {
      ui.deleteCheeseplateSuccess(response_data);
      return api.getAllCheeseplates();
    })
    .then(ui.getCheeseplatesSuccess)
    .catch(ui.failure);
};



const addHandlers = () => {
  $('.create-plate-form').on('submit', onCreateCheeseplate);
  $('.newest-plates').on('submit', '.update-cheese-on-plate-form', onUpdateCheeseplate);
  // $('.newest-plates').on('click', '.add-cheese-button', function(){
  //   $(this).modal("show");
  // });
  $('.newest-plates').on('click', '.delete-cheeseplate-button', onDeleteCheeseplate);
  $('.get-plates').on('click', onGetAllCheeseplates);
 };

module.exports = {
  addHandlers,
};
