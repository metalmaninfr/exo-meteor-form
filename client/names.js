import { Template } from "meteor/templating";
import people from "../imports/db/people";

Template.names.helpers({
  people : function(){
    return people.find();
  }
});
