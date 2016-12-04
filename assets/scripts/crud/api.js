'use strict';

const app = require('../../app.js');


// Cheese functions
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

const updateCheeseplate = (data) =>
$.ajax({
  // url: 'https://hidden-lowlands-96809.herokuapp.com/cheeses/1',
  url: app.host + '/cheeseplates/' + data.cheeseplate.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data,
});

// const deleteCheese = (id) =>
//   $.ajax({
//     url: app.host + '/cheeses/' + id,
//     // url: 'http://localhost:4741/cheeses/4',
//     method: 'DELETE',
//     // headers: {
//     //   Authorization: "Token token=" + app.user.token,
//     // },
//   });



// Cheeseplate functions
  const getAllCheeseplates = (data) =>
    $.ajax({
      url: app.host + '/cheeseplates',
      // url: 'http://localhost:4741/cheeses',
      method: 'GET',
      // headers: {
      //   Authorization: 'Token token=' + app.user.token,
      // },
      data,
    });

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

  // const updateCheeseplate = (data) =>
  // $.ajax({
  //   url: 'http://localhost:4741/cheeseplates/1',
  //   // url: app.host + '/cheeseplates/' + id,
  //   method: 'PATCH',
  //   // headers: {
  //   //   Authorization: 'Token token=' + app.user.token,
  //   // },
  //   data,
  // });

  const deleteCheeseplate = (id) =>
    $.ajax({
      url: app.host + '/cheeseplates/' + id,
      method: 'DELETE',
      headers: {
        Authorization: "Token token=" + app.user.token,
      },
    });




module.exports = {
  getAllCheeses,
  // getOneCheeseplate,
  updateCheeseplate,
  // deleteCheese,
  getAllCheeseplates,
  createCheeseplate,
  // updateCheeseplate,
  deleteCheeseplate,
};
