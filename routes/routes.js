const express =  require("express");
require('../controllers/Image')
const router = express.Router();
const path = require('path')
__dirname = path.resolve();

// Home route

router.post('/', async (req, res) => await save(req.body, async(result) => res.send(result)));
router.get('/', async (req, res) => await read(async(result) => res.send(result)));
router.delete('/:id', async (req, res) => await remove(req.params,async(result) => res.send(result)));
router.put('/', async (req, res) => await edit(req.body, async(result) => await res.send(result)));


// convert img
router.post('/link', async(req, res) => await link(req.body, async(result)=> await res.send(result)))
router.post('/file', async(req, res) => await file(req.body, async(result)=> await res.send(result)))
router.post('/folder', async(req, res) => await folder(req.body, async(result)=> await res.send(result)))
router.get('/image', async(req, res) => await res.sendFile(__dirname + '/public/images/test.jpeg'));

module.exports = router
