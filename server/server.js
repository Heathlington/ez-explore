const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3020;

app.use(express.static('../Client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Client/dist')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`))
})
