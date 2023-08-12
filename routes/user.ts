import {Router} from 'express';
import { postUser,loginUser } from '../controllers/user/postUser';

let multer = require('multer');
let formdata = multer();

const router = Router();
router.post(
    "/register",
    [formdata.fields([])],
    postUser,
);

router.post(
    "/login",
    [formdata.fields([])],
    loginUser,
);
export default router;
