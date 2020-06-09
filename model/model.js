import mongoose from 'mongoose';
import blogSchema from './schema.js';

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;