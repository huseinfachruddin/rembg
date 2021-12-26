const models = require('../models');

const initModel = async (cb) => {
	const model = await models
	const initialized = await model.Image;
	cb(initialized)
}; 

const save = () =>{}; 
const remove = () =>{}; 
const update = () =>{};
const read = async (cb) => await cb(initModel(res=> res.findAll()))

module.exports = {read} 

