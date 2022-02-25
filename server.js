const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_media_api', {

});

mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});