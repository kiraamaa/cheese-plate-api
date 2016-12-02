'use strict';

const app = require('../../app.js');

const getAllCheeses = (data) =>
  $.ajax({
    url: app.host + '/cheeses',
    // url: 'http://localhost:4741/cheeses',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
    data,
  });

// const getOneCheeseplate = (data) =>
//   $.ajax({
//     // url: app.host + '/cheeseplates/:id',
//     url: 'http://localhost:4741/cheeseplates/1',
//     method: 'GET',
//     // headers: {
//     //   Authorization: 'Token token=' + app.user.token,
//     // },
//     data,
//   });

const createCheeseplate = (data) =>
$.ajax({
  url: app.host + '/cheeseplates',
  // url: 'http://localhost:4741/cheeseplates',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data,
});

const updateCheese = (data) =>
$.ajax({
  url: 'http://localhost:4741/cheeses/4',
  // url: app.host + '/cheeses/' + data.cheeses.cheese_id,
  method: 'PATCH',
  // headers: {
  //   Authorization: 'Token token=' + app.user.token,
  // },
  data,
});

const deleteCheese = (id) =>
  $.ajax({
    url: app.host + '/cheeses/' + id,
    // url: 'http://localhost:4741/cheeses/4',
    method: 'DELETE',
    // headers: {
    //   Authorization: "Token token=" + app.user.token,
    // },
  });



module.exports = {
  getAllCheeses,
  // getOneCheeseplate,
  createCheeseplate,
  updateCheese,
  deleteCheese,
};
