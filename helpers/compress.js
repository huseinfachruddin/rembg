const sharp = require('sharp');
const fs = require('fs')
const path = require('path')
__dirname = path.resolve();

function compress (folder, image) {
	sharp(folder + '/' + image)
	  .rotate()
	  .resize(500)
	  .jpeg({ mozjpeg: true })
	  .toFile(image, (err)=>{
	  	if(err) console.log(err)
	  		console.log('image has been saved')
	  })
}


function readFile (folder) {
  	fs.readdir(__dirname + '/contoh/15', function read(err, data) {
    if (err) {
        throw err;
    }
    var content = data;
  	folder = '.' + '/contoh/15';
    content.map(image => {
    	compress(folder, image)
    })
   
  	});
}

readFile()