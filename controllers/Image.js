const models = require('../models');
const {link, folder, file} = require('rembg-nodejs');

const initModel = async (cb) => {
	const model = await models
	const initialized = await model.Image;
	cb(initialized)
}; 

global.save = async (body, cb) => await initModel(model=>model.create(body).then(res=>cb(res))); 

global.read = async (cb) => await initModel(model=>model.findAll().then(res=>cb(res)))

global.edit = async({name, id}, cb) => await initModel(model=>model.update({name}, {where:{id}}).then(res=>cb(res)));

global.remove = async ({id}, cb) => await initModel(model=>model.destroy({where:{id}}).then(res=>cb(`berhasil menghapus`))); 

// convert img
global.link = async ({url, output},cb) => await  link(url,output, async (res)=>await cb(res));

global.folder = async ({input, output},cb) => await  link(url,output, async (res)=>await cb(res));

global.file = async ({input, output},cb) => await  file(input,output, async (res)=>await cb(res));


