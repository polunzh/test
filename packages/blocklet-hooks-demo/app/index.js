const express = require('express');
const passport = require('@abtnode/passport');

const app = express();
app.use(
  passport({
    nodeHost: process.env.ABT_NODE_URL,
    blockletSk: process.env.BLOCKLET_APP_SK,
    blockletRoutes: [/^\/admin/, /^\/config/],
  })
);

app.get('/admin', (req, res) => {
  res.send('Congratulations! you can access the admin dashboard');
});

app.get('/config', (req, res) => {
  res.send('Congratulations! you can access the config page');
});

app.get('/', (req, res) => {
  res.send('Hooray, you blocklet is up and running');
});

app.listen(process.env.BLOCKLET_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Blocklet ready at ${process.env.BLOCKLET_PORT}`);
});
