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

const onUpdateCheeseplate = function () {
let data = {
  "cheeseplate": {
    "cheese": {
        "name": glob.vars.name,
        "description": glob.vars.description,
      },
  },
};
api.updateCheeseplate(data)
  .then(ui.updateCheeseplateSuccess)
  .catch(ui.failure);
};

const onDeleteCheeseplate = function (event) {
  event.preventDefault();
  api.deleteCheeseplate()
    .then(ui.deleteCheeseplateSuccess)
    .catch(ui.failure);
};


const addHandlers = () => {
  $('.get-all').on('click', onGetAllCheeses);
  // $('.get-one').on('click', onGetOneCheeseplate);
  $('.create-plate-form').on('submit', onCreateCheeseplate);
  $('.add-button').on('click', onUpdateCheeseplate);
  $('.delete-button').on('click', onDeleteCheeseplate);
  // $('#myModal2').on('submit', onSignIn);
  // $('.sign-out-button').on('click', onSignOut);
  // $('#myModal3').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
