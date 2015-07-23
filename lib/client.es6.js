// Singleton
class HubbleClass extends EventEmitter {
  constructor() {
    super();

    // Default options
    this._route = "/hubble";
  }

  configure(options) {
    // Possibly overwrite defaults
    this._route = options.route || this._route;

    // Add each section declared in options
    _.each(options.sections, (section) => this.addSection(section));

    this.registerRoute();
  }

  addSection(...args) {
    let options = prepareOptions(...args),
        new_section = new HubbleClass.Section(options);

    // Attach the new section instance to Hubble
    this[options.name] = new_section;

    this.registerRoute(new_section);

    this.emit("added-section", new_section);
  }

  // Call this function when Hubble is configured or a new section is added,
  // in order to register the relevant route with either IronRouter or FlowRouter
  registerRoute(new_section) {
    let full_route =  this._route;

    if (new_section instanceof HubbleClass.Section) {
      full_route = full_route + "/" + new_section._path;
    }

    if (Package["iron:router"]) {
      let IronRouter = Package["iron:router"].IronRouter;

      // Route definition
      IronRouter.route(full_route, {
        action: function (params) {
          console.log("You are now at a registered Hubble route:", full_route);
        }
      });

      console.log("IronRouter present – registered", full_route);
    }
    else if (Package["meteorhacks:flow-router"]) {
      let FlowRouter = Package["meteorhacks:flow-router"].FlowRouter;

      // Route definition
      FlowRouter.route(full_route, {
        action: function (params) {
          console.log("You are now at a registered Hubble route:", full_route);
        }
      });

      console.log("FlowRouter present – registered", full_route);
    }
  }
}


// Section class
HubbleClass.Section = class extends EventEmitter {
  constructor(...args) {
    // Super constructor must always be called when extending
    super();

    let options = prepareOptions(...args);

    // Copy options to new section, possibly taking title and path from name
    this._name = options.name;
    this._title = options.title || capitalizeFirstLetter(options.name);
    this._path = options.path || options.name;

    // Add each element declared in options
    _.each(options.elements, (section) => this.addElement(section));
  }

  addElement(...args) {
    let options = prepareOptions(...args),
        new_element = new HubbleClass.Element(options);

    // Attach the new section instance to Hubble instance
    this[options.name] = new_element;

    this.emit("added-element", new_element);
  }
};

// Element class
HubbleClass.Element = class extends EventEmitter {
  constructor(...args) {
    // Super constructor must always be called when extending
    super();

    let options = prepareOptions(...args);

    // Copy options to new section, possibly taking title and template from name
    this._name = options.name;
    this._title = options.title || capitalizeFirstLetter(options.name);
    this._template = options.template || options.name;
    this._data = options.data;
  }
};


Hubble = new HubbleClass;


// Item name can either be passed as the first argument or as part of options
function prepareOptions(...args) {
  let options = args.pop();

  options.name = args[0] || options.name;

  // Name must be a string
  if (!_.isString(options.name)) throw new TypeError;

  return options;
}

// E.g. make a name look like a title
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
