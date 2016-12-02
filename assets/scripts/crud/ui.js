'use strict';

// const app = require ('../../app');

const getCheeses = require('../handlebars-templates/show-all-cheeses.handlebars');
const getCheeseplates = require('../handlebars-templates/show-all-cheeseplates.handlebars');

const getCheesesSuccess = (data) => {
  console.log(data);
  $('.poop').html(getCheeses(data));
};

const updateCheeseSuccess = (data) => {
  console.log(data);
};

const deleteCheeseSuccess = () => {
  console.log('poop');
  $('.poop').html(deleteCheese(data));
};

// const getCheeseplateSuccess = (data) => {
//   console.log(data);
// };

const getCheeseplatesSuccess = (data) => {
  console.log(data);
  $('.newest-plates').html(getCheeseplates(data));
};

const updateCheeseplateSuccess = (data) => {
  console.log(data);
};

const deleteCheeseplateSuccess = () => {
  // console.log('poop');
  // $('.poop').html(deleteCheese(data));
};

const createCheeseplateSuccess = () => {
  // debugger;
  console.log('create cheeseplate');
  // $('#myModal4').modal('hide');
  // $('body').removeClass('modal-open');
  // $('.modal-backdrop').remove();
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
  deleteCheeseSuccess,
  failure,
  createCheeseplateSuccess,
  getCheeseplatesSuccess,
  updateCheeseplateSuccess,
  deleteCheeseplateSuccess,
};
