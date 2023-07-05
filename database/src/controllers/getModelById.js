const store = require("../database")
const {response}= require("../utils")

module.exports = async (req,res) => {
   const { model, id } = req.params;
   const modelGetById = await store[model].get(id)
    response(res, 200, modelGetById)
};