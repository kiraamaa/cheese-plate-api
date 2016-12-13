'use strict';

// const app = require ('../../app');

const getCheeses = require('../handlebars-templates/show-all-cheeses.handlebars');
const getCheeseplates = require('../handlebars-templates/show-all-cheeseplates.handlebars');
// const updateCheese = require('../handlebars-templates/update-cheese.handlebars');

const getCheesesSuccess = (data) => {
  console.log(data);
  $('.cheeses-content').html(getCheeses(data));
};

const updateCheeseplateSuccess = (data) => {
  console.log(data);
  $('.newest-plates').html(getCheeseplates(data));
  $('.cheesesOnPlateModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.duplicate-cheese-message').hide();
};

const getCheeseplatesSuccess = (data) => {
  console.log(data);
  $('.newest-plates').html(getCheeseplates(data));
  $('.cheesesOnPlateModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.duplicate-cheese-message').hide();
};

// const getCheeseplateSuccess = (data) => {
//   console.log(data);
//   $('.newest-plates').html(getCheeseplates(data));
// };

const deleteCheeseplateSuccess = () => {
  console.log('change-name-of-last-cheese');
  $('.cheeseplate').html(getCheeseplates());
};

const createCheeseplateSuccess = (data) => {
  console.log('create cheeseplate');
  $('#myModal4').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('.newest-plates').html(getCheeseplates(data));
  $('.duplicate-cheese-message').hide();
  // $('.cheesesOnPlateModal').modal('hide');
  // $('.cheesesOnPlateModal').modal('hide');
  // $('body').removeClass('modal-open');
};

const failure = () => {
  console.error('failing');
};

const updateCheeseplateFailure = () => {
  console.error('update failing');
  $('.duplicate-cheese-message').show();
  // alert("Please input a different cheese ID. Duplicate cheeses cannot be added to the same plate.");
};


module.exports = {
  getCheesesSuccess,
  updateCheeseplateSuccess,
  failure,
  createCheeseplateSuccess,
  getCheeseplatesSuccess,
  // getCheeseplateSuccess,
  deleteCheeseplateSuccess,
  updateCheeseplateFailure,
};
