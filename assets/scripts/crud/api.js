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

const updateCheeseplate = (data) =>
$.ajax({
  url: 'http://localhost:4741/cheeseplates/3',
  // url: app.host + '/cheeseplates/' + app.cheeseplates.id,
  method: 'PATCH',
  // headers: {
  //   Authorization: 'Token token=' + app.user.token,
  // },
  data,
});

const deleteCheeseplate = () =>
  $.ajax({
    // url: app.host + '/sign-out/' + app.user.id,
    url: 'http://localhost:4741/cheeseplates/11',
    method: 'DELETE',
    // headers: {
    //   Authorization: "Token token=" + app.user.token,
    // }
  });



module.exports = {
  getAllCheeses,
  // getOneCheeseplate,
  createCheeseplate,
  updateCheeseplate,
  deleteCheeseplate,
};
