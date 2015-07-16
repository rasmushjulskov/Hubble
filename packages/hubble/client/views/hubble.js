// Write your package code here!

Template['styleguide'].helpers({
  atoms: function(){
    var template = Session.get("sg-template");
    var data = Session.get("sg-data");
    if(template != null && data != null ){
      return data[template].templates;
    } else {
    //  return data["Frontpage"].templates;
      // return data.templates;
    }
  },
  navigation: function(){
    var data = Session.get("sg-data");
    if(data != null){
      return _.keys(data);
    }
  },
  escaped: function(data) {
    return Blaze.toHTML(Blaze.With({}, function(){
       Template[data]
    }));
  }
});

Template['styleguide'].events({
});



Template['styleguide'].rendered = function(){
  HTTP.call("GET", '/styleguide-config.json', function(e, content){
    var data = content.data;
    if(data != null){
      Session.set("sg-data", data);
    }
  });


  // expand trigger
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });


  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
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
