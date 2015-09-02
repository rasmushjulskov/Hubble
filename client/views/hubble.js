var getData = function(){
  HTTP.call("GET", '/hubble-config.json', function(e, res){
    var data = res.data;
    if(data != null){
      Session.set("sg-data", data);
    }
  });
}

Template['styleguide'].helpers({
  atoms: function(){
    var template = Session.get("sg-template");
    var data =  Session.get("sg-data");
    if(data != null){
      if(template != null ){
        return data[template].templates;
      } else {
        return data[_.first(_.keys(data))].templates;
      }
    } else {
      return [{'name': 'Welcome To Hubble'}];
    }

  },
  navigation: function(){
    var data = Session.get("sg-data");

    if(data != null){
      return _.keys(data);
    }
  },
  escaped: function(id) {
    var data = Session.get("sg-data") || Template;
    return Blaze.toHTML(Blaze.With(data[id], function() { return Template[id]; }));
  },
  summary: function(id) {
    var data = Session.get("sg-data") || Template;
    var str = Blaze.toHTML(Blaze.With(data[id], function() { return Template[id]; }))
    if(str.indexOf("@hubble") > -1 ){
      return str.substring(str.indexOf("@hubble")+8, str.indexOf("-->"));
    }
  },
  params: function(data) {
    if(data == undefined) {
      return false;
    }

    if(typeof data === "object" && data.length == undefined) {
      var pairs = _.pairs(data);

      // Change value of the data object to the typeof
      pairs.forEach(function(para, index){
        pairs[index][1] = typeof para[1];
      });

      return pairs;
    }

  }

});

Template['styleguide'].events({
  'click .sg-expander-trigger': function(e){
    $(e.target).toggleClass("sg-expander-hidden");
  },

  'click .sg-header__logo' : function(){
    getData();
  }
});





Template['styleguide'].rendered = function(){
  getData();
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
