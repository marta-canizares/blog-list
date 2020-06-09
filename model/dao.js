import connection from '../mongo/mongo.js'
import Blog from './model.js';
import { response } from 'express';

class BlogDAO {

    constructor() {

    }

    list() {
        return Blog.find({})
    }

    create(pBlog) {
        const blog = new Blog({
            title: pBlog.title,
            author: pBlog.author,
            url: pBlog.url,
            likes: pBlog.likes,
        })

        blog.save()
            .then(result => {
                response.status(201).json(result);
            })
    }

}

export default new BlogDAO();

