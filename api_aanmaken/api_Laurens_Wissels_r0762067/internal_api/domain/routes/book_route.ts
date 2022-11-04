import Router from "express";

const {get,post,del,update} = require('../controllers/book_controller');
const router = Router();
router.get('/get/:title', get);
router.post('/post', post);
router.delete('/delete/:title', del);
router.put('/update', update);

module.exports = router;