Package.describe({
  name: "rhjulskov:hubble",
  version: "0.0.4",

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
    "http",
    "markdown",
    "simple:highlight.js@1.0.9",
    "fourseven:scss@1.2.3",
    "iron:router@1.0.7"
  ]);

  api.addFiles([
    "client/routes.js",
    "client/views/hubble.html",
    "client/views/hubble.js",
    "client/views/hubble.scss"
  ], "client");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("rhjulskov:hubble");

  api.addFiles("tests/hubble-tests.js");
});
