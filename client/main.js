import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session'

import {routes,onAuthChange} from './../imports/routes/routes';

import './../imports/startup/simple-schema-configuration';
Tracker.autorun(() =>{
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);

});

// Tracker.autorun(()=>{
// Session.set('name','Asabeneh');
// const name = Session.get('name');
// console.log("Session name",name)
//
// });


Meteor.startup(()=>{
Session.set('showVisible',true)
ReactDOM.render(routes, document.getElementById('app'));
})
