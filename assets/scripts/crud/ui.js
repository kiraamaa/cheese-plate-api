'use strict';

// const app = require ('../../app');

const getCheesesSuccess = (data) => {
  console.log(data);
};

const updateCheeseplateSuccess = (data) => {
  console.log(data);
};

const deleteCheeseplateSuccess = (data) => {
  console.log(data);
  // let i = cheeseplates.length,
  //   cheeseplateData;
  //
  // while(i--) {
  //     if(selectedGroup.owner == users[i].id) {
  //         ownerData = users[i];
  //         break;
  //     }
  // }
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
  updateCheeseplateSuccess,
  failure,
  createCheeseplateSuccess,
  deleteCheeseplateSuccess,
  // signInSuccess,
  // changePassword,
  // signOutSuccess
};
