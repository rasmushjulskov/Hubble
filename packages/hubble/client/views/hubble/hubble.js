// Write your package code here!

Template['styleguide'].helpers({
  atoms: function(){
    var template = Session.get("sg-template");
    var data = Session.get("sg-data");
    if(data != null){
      if(template != null ){
        return data[template].templates;
      } else {
        return data[_.first(_.keys(data))].templates;
      }
    } else {
      return [{'name': 'sgEmptyState'}];
    }

  },
  navigation: function(){
    var data = Session.get("sg-data");
    if(data != null){
      return _.keys(data);
    }
  },
  escaped: function(id) {
    var data = Session.get("sg-data");
    return Blaze.toHTML(Blaze.With(data[id], function() { return Template[id]; }));
    /*return Template[data]; Blaze.toHTML(Template[data]);*/

    /*Blaze.toHTML(Blaze.With({}, function(){
       Template[data]
    }));
    */
  }
});

Template['styleguide'].events({
  'click .expander-trigger': function(e){
    $(e.target).toggleClass("expander-hidden");
  }
});





Template['styleguide'].rendered = function(){
  HTTP.call("GET", '/styleguide-config.json', function(e, content){
    var data = content.data;
    if(data != null){
      Session.set("sg-data", data);
    }
  });

};








// http://stackoverflow.com/questions/19369824/iterate-through-directory-with-assets-gettext
// if(Meteor.isServer) {
//   var done, files;

//   var fs = NPM.Require('fs');

//   files = fs.readdirSync("/", function(e, r) {});

//   done = Meteor.bindEnvironment(function(files) {
//     return _.each(files, function(filename) {
//       var myjson;
//       myjson = JSON.parse(Assets.getText("lib/" + filename));
//       /* do Something */

//     });
//   }, function(e) {
//     throw e;
//   });

//   done(files);
// }
