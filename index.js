const express = require('express');

const app = express();

app.use(express.static('./build'));
app.listen(5000, (x) => console.log('Server started on port 5000...'));
