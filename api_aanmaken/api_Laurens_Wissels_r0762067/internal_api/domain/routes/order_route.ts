import Router from "express";

const {get,post} = require('../controllers/order_controller');
const router = Router();
router.get('/get', get);
router.get('/get/:id', get);
router.get('/post', post);

module.exports = router;