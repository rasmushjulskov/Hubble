![Hubble](logo.png)

Hubble 0.0.5
============

Hubble is a living styleguide for Meteor. Hubble isn't based on any predefined structure or methodology, but is instead fully adjustable by a simple json structure.

After adding the package to your project navigate to thr URL `/hubble`. Unless you already have a hubble-config.json in your public folder, an example for such is given.


The structure for the config file is as follows:

```javascript
{
  // Order your styleguide in as many sections as you want
  // The section name is presented in the navigation
  "SECTION_NAME": {
    // Each section needs an array of templates
    "templates": [
      {
        // Each template is an object with atleast an name key
        // The name key should be equal the name of the Blaze template
        "name": "TEMPLATE_NAME",

        // Optional:  
        "centered": true,

        // Optional: declare the data for the blaze template if needed
        // This data is also shown above the element in the styleguide
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

## Features

### Summary
To declare a summary to an element in the styleguide, start a comment in the given template, with the prefix @hubble.



### Predefined templates
Hubble comes with 2 predefined templates for showing colors and fonts: sgcolors & sgfonts. An example of using these is given after installing the package.


## Notes

* Hubble HTTP the public json file, and restructuring the file can feel slow due to cashing.
* Only works with Blaze.
