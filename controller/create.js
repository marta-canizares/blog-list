import BlogDAO from '../model/dao.js';

const create = async (req, res) => {

    try {

        const blog = req.body;
        const insertId = await BlogDAO.create(blog);
        blog.id = insertId;

        res.json(blog);

    } catch (error) {

        console.log(error);

    }
}

export default create;