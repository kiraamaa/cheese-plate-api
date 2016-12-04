'use strict';

// const app = require ('../../app');

const getCheeses = require('../handlebars-templates/show-all-cheeses.handlebars');
const getCheeseplates = require('../handlebars-templates/show-all-cheeseplates.handlebars');
// const updateCheese = require('../handlebars-templates/update-cheese.handlebars');

const getCheesesSuccess = (data) => {
  console.log(data);
  $('.cheeses-content').html(getCheeses(data));
};

const updateCheeseSuccess = (data) => {
  console.log(data);
  $('.cheeses-content').html(getCheeses(data));
};

// const deleteCheeseSuccess = () => {
//   console.log('change-name-of-last-cheese');
//   $('.change-name-of-last-cheese').html(deleteCheese(data));
// };

// const getCheeseplateSuccess = (data) => {
//   console.log(data);
// };

const getCheeseplatesSuccess = (data) => {
  console.log(data);
  $('.newest-plates').html(getCheeseplates(data));
};

// const updateCheeseplateSuccess = (data) => {
//   console.log(data);
//   $('.newest-plates').html(getCheeseplates(data));
// };

const deleteCheeseplateSuccess = () => {
  console.log('change-name-of-last-cheese');
  $('.cheeseplate').html(getCheeseplates());
};

const createCheeseplateSuccess = (data) => {
  // debugger;
  console.log('create cheeseplate');
  $('#myModal4').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.newest-plates').html(getCheeseplates(data));
};

const failure = () => {
  console.error('failing');
};

// const signOutSuccess = () => {
//   app.user = null;
//   // console.log ('Signed out');
// };


module.exports = {
  getCheesesSuccess,
  // getCheeseplateSuccess,
  updateCheeseSuccess,
  // deleteCheeseSuccess,
  failure,
  createCheeseplateSuccess,
  getCheeseplatesSuccess,
  // updateCheeseplateSuccess,
  deleteCheeseplateSuccess,
};
