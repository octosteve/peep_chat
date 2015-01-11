import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rooms", function(){
    this.resource("room", {path: "/:room_id"})
  });
});

export default Router;
