// here we export our home path for the landing page to be utilized in our directory

//it looks like most if not all of the work here needs to be performed in the client folder

const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
