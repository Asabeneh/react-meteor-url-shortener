import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';

import './../imports/startup/simple-schema-configuration';
import './../imports/api/users';
import {Links} from './../imports/api/links';

Meteor.startup(() => {

let now = new Date().getTime();
console.log(now);
let momentNow = moment(0);
console.log(momentNow.fromNow('MMM Do, YYYY,h:mm A'))
WebApp.connectHandlers.use((req,res,next)=>{
// console.log('hhhh', req.url);
const _id = req.url.slice(1);
// console.log(_id);
const link = Links.findOne({_id});
// console.log(link);

if(link){

res.statusCode = 302;
res.setHeader('Location',link.url);
 res.end();
Meteor.call('links.trackVisit', _id);
}else{
next();
}

});

});
