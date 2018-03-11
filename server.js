// Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(`${__dirname}/dist`));

// Redirect http to https
app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production')
    res.redirect(`https://${req.hostname}${req.url}`);
  else
    next(); /* Continue to other routes if we're not redirecting */
});

// Delegate all get requests to index.html, so that PathLocationStrategy can be used
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
