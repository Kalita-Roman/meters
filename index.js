const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||3001;

app.use(express.static('build'));
app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, 'build') }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
