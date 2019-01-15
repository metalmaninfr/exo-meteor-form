import { Meteor } from 'meteor/meteor'

import people from "../imports/db/people";


Meteor.startup(() => {
  if( people.find().count() <= 0 ) {
    people.insert(
      {
        name : "Alex",
        mail : "alex@hostnfly.com"
      }
    );
  }
});
