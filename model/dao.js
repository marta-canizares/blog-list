import connection from '../mongo/mongo.js'
import Blog from './model.js';

class BlogDAO {

    constructor() {

    }

    list() {
        return Blog.find({})
    }

    create(blogs) {
        const blog = new Blog(request.body)({

        })
        return Blog.save();
    }


}

export default new BlogDAO();

