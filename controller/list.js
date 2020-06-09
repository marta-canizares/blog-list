import BlogDAO from '../model/dao.js';

const list = async (req, res) => {

    try {
        const blogs = await BlogDAO.list();

        res.json(blogs);

    } catch (error) {


    }
}

export default list;