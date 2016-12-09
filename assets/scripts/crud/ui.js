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
};

const getCheeseplatesSuccess = (data) => {
  console.log(data);
  $('.newest-plates').html(getCheeseplates(data));
};

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
};

const failure = () => {
  console.error('failing');
};


module.exports = {
  getCheesesSuccess,
  updateCheeseplateSuccess,
  failure,
  createCheeseplateSuccess,
  getCheeseplatesSuccess,
  deleteCheeseplateSuccess,
};
