const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = schema({
    title: String,
    nbrOfLessons: {type: Number, required: true},
    index: Number,
    active: Boolean,
    infos: {type: {}, default: { author: 'nathalie' }}
});

const Chapter = mongoose.model('chapters', chapterSchema);


mongoose.connect('mongodb://admin:pw4Admin$2$@localhost:27017/dyma', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log('Mongoose sccessfully connected to MongoDB database');




    // const newChapter = new Chapter();
    // newChapter.title = 'MongoDB';
    // newChapter.nbrOfLessons = 90;
    //
    // newChapter.save((err, document) => {
    //     console.log(document);
    // })
});