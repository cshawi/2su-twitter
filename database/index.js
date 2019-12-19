const mongoose = require('mongoose');

const LOCAL_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/twitter'
const ATLAS_CONNECTION_STRING = 'mongodb+srv://Admin:pw4Admin$2$@cluster0-dmte1.mongodb.net/twitter?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify : false
};

mongoose.connect(ATLAS_CONNECTION_STRING, options)
.then(() => { console.log('Successfully connected to MongoDB') })
.catch(err => console.log(err) )