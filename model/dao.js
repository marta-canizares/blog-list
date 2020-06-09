import connection from '../mongo/mongo.js'
import Blog from './model.js';

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
        return blog.save();
    }

}

export default new BlogDAO();

