//don't believe we should touch the server here. i'm writing down by hand where i think we need to change things because i find this work flow for PWA a bit confusing. will also follow pre-written comments

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
