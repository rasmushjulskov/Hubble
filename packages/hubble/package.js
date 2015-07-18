Package.describe({
  name: 'rhjulskov:hubble',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(["iron:router@1.0.7"], {weak: false, unordered: false});
  api.use(['templating']);
  api.use(['underscore', 'http', 'markdown']);

  api.use(['fourseven:scss@1.2.3'],'client');
  api.addFiles(['lib/routes/hubbleRoute.js']);
  api.addFiles(['client/views/hubble/hubble.html','client/views/hubble/hubble.js', 'client/views/hubble/hubble.scss'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rhjulskov:hubble');
  api.addFiles('hubble-tests.js');
});
