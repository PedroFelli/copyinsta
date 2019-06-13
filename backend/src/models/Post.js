const moongoose = require('mongoose');

 const PostSchema = new moongoose.Schema({
     author: String,
     place: String,
     description: String,
     hashtags: String,
     image: String,
     likes: {
         type: Number,
        default: 0,
     }
 }, {
     timestamps: true,
});

module.exports = moongoose.model('Post', PostSchema);