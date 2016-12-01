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
    // url: app.host + '/cheeseplates',
    url: 'http://localhost:4741/cheeseplates',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
    data,
  });

// const signIn = (data) =>
//   $.ajax({
//     url: app.host + '/sign-in',
//     // url: 'http://localhost:4741/sign-in',
//     method: 'POST',
//     data,
//   });
//
// const signOut = () =>
//   $.ajax({
//     url: app.host + '/sign-out/' + app.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: "Token token=" + app.user.token,
//     }
//   });
//
// const changePassword = (data) =>
//   $.ajax({
//     url: app.host + '/change-password/' + app.user.id,
//     method: 'PATCH',
//     data,
//     headers: {
//       Authorization: "Token token=" + app.user.token,
//     }
//   });

module.exports = {
  getAllCheeses,
  // getOneCheeseplate,
  createCheeseplate,
};
