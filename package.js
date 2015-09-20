Package.describe({
  name: 'rhjulskov:hubble',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Hubble — living style guide [BETA]',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Rhjulskov/Hubble'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(["iron:router@1.0.7"], {weak: false, unordered: false});
  api.use(['templating']);
  api.use(['underscore', 'http', 'markdown', 'simple:highlight.js@1.0.9']);

  api.use(['fourseven:scss@1.2.3'],'client');
  api.addFiles(['client/routes.js']);
  api.addFiles(['client/views/hubble.html','client/views/hubble.js', 'client/views/hubble.scss'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rhjulskov:hubble');
  api.addFiles('tests/hubble-tests.js');
});
