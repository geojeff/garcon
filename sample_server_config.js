var g = require('./lib/garçon'),
    server, myApp;
    
// create a server which will listen on port 8000 by default
server = new g.Server();

// adding an application named 'myApp' tells the server to respond to
// the /myApp url and to create a myApp.html file when saving
myApp = server.addApp({
  name: 'myApp',
  theme: 'my_theme',
  buildLanguage: 'french'
});

// myApp needs SproutCore to run
myApp.addSproutcore();

// add other dependencies
myApp.addFrameworks(
  
  // a third party framework
  { path: 'frameworks/calendar' },
  
  // the theme you're using
  { path:'frameworks/sproutcore/themes/standard_theme', combineScripts: true },
  
  // if you're on Quilmes and use Ace, uncomment the next 2 lines instead
  // { path:'frameworks/sproutcore/themes/empty_theme', combineScripts: true },
  // { path:'frameworks/sproutcore/themes/ace', combineScripts: true },
  
  // finally, the sources for myApp must be added as well
  { path: 'apps/my_app' }
);

// add some html for inside the <head> tag
myApp.htmlHead = '<title>My App</title>';

// add some html for inside the <body> tag
myApp.htmlBody = [
  '<p id="loading">',
    'Loading…',
  '</p>'
].join('\n');

// build the app
myApp.build(function() {
  
  // run the server
  server.run();
  
});
