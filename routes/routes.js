const express =  require("express")
const {read} =  require('../controllers/Image')

const router = express.Router();
 
// Home route

router.get('/', async (req, res) => await read(async(result) => console.log(result)));

 
module.exports = router
