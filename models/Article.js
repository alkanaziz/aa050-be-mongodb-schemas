import mongoose from "mongoose";
const { Schema, model } = mongoose;

const articleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    keywords:[String],
    category: String,
    comments: [
       {
          text: String,
          user: String
       },
    ]
 })

 const Article = model('Article', articleSchema);

 export default Article;