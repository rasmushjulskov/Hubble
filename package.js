Package.describe({
  name: "rhjulskov:hubble",
  version: "0.0.4",
  // debugOnly: true,

  // Brief, one-line summary of the package.
  summary: "Hubble — living style guide [BETA]",

  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/Rhjulskov/Hubble"
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.2");

  api.use([
    "templating",
    "underscore",
    "markdown",
    "grigio:babel",
    "fourseven:scss@1.2.3",
    "raix:eventemitter",
    "simple:highlight.js@1.0.9"
  ]);

  api.addFiles([
    "lib/client.es6.js"
    // "lib/views/main.html",
    // "lib/views/main.js",
    // "lib/views/main.scss"
  ], "client");

  api.addFiles([
    "lib/server.es6.js"
  ], "server");

  api.export("Hubble");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("rhjulskov:hubble");

  api.addFiles("tests/hubble-tests.js");
});
