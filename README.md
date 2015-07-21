# Hubble
> Hubble is in a early beta, so any feedback is very much appreciated! 

Hubble is a living styleguide for Meteor.js. Hubble isn't based on any predefined structure or methodology, but is instead fully adjustable by a simple json structure.

After adding the package to your project navigate to /hubble. Unless you already have a hubble-config.json in your public folder, and example for such is given.

The structure for the config file is as follows:
```javascript
{
  // Order your styleguide in as many sections as you want
  "SECTION_NAME": {
    // Each section needs an array of templates
    "templates": [
      {
        // Each template is an object with atleast an name key
        "name": "TEMPLATE_NAME",
        // Optional: declare the date for the blaze template if needed
        "data": {
          "DATA_KEY": "DATA_VALUE",
          "DATA_KEY": "DATA_VALUE"
        }
      }
      // ... and so on
    ]
  }
  // ... and so on
}
```

Hubble comes with 2 predefined templates for showing colors and fonts: sgcolors & sgfonts. An example of using these is given after installing the package.


## notes
* Hubble HTTP the public json file, and restructuring the file can feel slow due to cashing.
* All templates and css classes is prefixed with sg.
* Only works with Blaze.
