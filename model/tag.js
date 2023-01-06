const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodepop');

const tagsSchema = mongoose.Schema({
    list: [String]
});

const Tags = mongoose.model('Tag', tagsSchema);

module.exports = Tags;


