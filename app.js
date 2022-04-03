const express = require('express');
const app = express();

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/mail', require('./routes/mailRoute'));

//server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});