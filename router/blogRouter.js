import Router from 'express';
import list from '../controller/list.js';
import create from '../controller/create.js';


const router = Router();

router.route('/')
    .get(list)
    .post(create);

export default router;