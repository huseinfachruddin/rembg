import express from "express";
// import im from 'imagemagick';
// import Jimp from 'jimp'
// import rgbHex from 'rgb-hex'
import rmgb from 'rembg-nodejs'
const {folder, file,link} = rmgb;

const router = express.Router();
 
// Home route

router.get('/', async (req, res) => {
    let data = await link('http://127.0.0.1:8000/mamang.jpeg','qqq.png',  async (e) =>{ 
    
    console.log(e)
    
    await res.send('data')
});
});

// router.get('/', async (req, res) => {
//     const path = './rodok cantik.JPG'
//     const newName = './images/'+'image3'+'.png'
//     try {
//         const img = await Jimp.read(path)
//         const {r,g,b,a} = Jimp.intToRGBA(img.getPixelColor(5,5))
//         let hexa = rgbHex(r,g,b)
//         res.status(200).json({
//             success : true,
//             message : hexa
//         })
//         im.convert(
//         [path,'-fuzz', '18%', '-transparent', `#${hexa}`,newName],
//         function (err, stdout) {
//             if (err) {
//               console.log(err);
//             }
//             console.log(stdout);
//           }
//         )
//         res.status(200).json({
//             success : true,
//             message : req.body
//         })
//     } catch (error) {
//         res.status(400).json({
//             success : false,
//             message : 'ada kesalahan dalam covert image'
//         })
//     }
// });

 
export default router
