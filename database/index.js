const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://Admin:pw4Admin$2$@cluster0-dmte1.mongodb.net/twitter?retryWrites=true&w=majority', options)
.then(() => { console.log('Successfully connected to MongoDB on Atlas') })
.catch(err => console.log(err) )