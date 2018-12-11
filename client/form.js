import { Template } from "meteor/templating";
import people from "../imports/db/people";


Template.form.events
({"click #submit" : function(event, template) {
    people.insert({
      name : template.find( "#name" ).value
    }
  )}
})
