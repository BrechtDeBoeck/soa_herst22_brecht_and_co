import Router from "express";

const {get, list} = require('../controllers/book_controller');
const router = Router();
router.get('/get/:title', get);
router.get('/list', list);

module.exports = router;