'use strict';

// const app = require ('../../app');

const getCheeses = require('../handlebars-templates/show-all-cheeses.handlebars');

const getCheesesSuccess = (data) => {
  console.log(data);
  $('.poop').html(getCheeses(data));
};

const updateCheeseSuccess = (data) => {
  console.log(data);
};

const deleteCheeseSuccess = () => {
  console.log('poop');
  // $('.poop').html(deleteCheese(data));
};

// const getCheeseplateSuccess = (data) => {
//   console.log(data);
// };

const createCheeseplateSuccess = () => {
  // debugger;
  console.log('create');
  $('#myModal4').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
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
  failure,
  createCheeseplateSuccess,
  deleteCheeseSuccess,
  // signInSuccess,
  // changePassword,
  // signOutSuccess
};
