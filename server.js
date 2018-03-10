const path = require('path');

//Install express server
const express = require('express');
const app = express();

// Redirect all requests to use https
app.use(() => {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Delegate all get requests to index.html, so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
