const Model = require('../models')

class RegancyController {
    static async create (req, res) {
        const {province_id, name, alt_name, latitude, longitude} = req.body
        try{
          const createRegancy = await Model.Regancy.create({province_id : province_id, name : name, alt_name : alt_name, latitude : latitude, longitude : longitude})
          if(createRegancy) return res.status(200).json({
            message : 'Regancy successfully created',
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async update (req, res) {
        const {id} = req.params
        const {name, alt_name, latitude, longitude} = req.body
         try{
          const updateRegancy= await Model.Regancy.update({name : name, alt_name : alt_name, latitude : latitude, longitude : longitude}, {where : {id : id}})
          if(updateRegancy) return res.status(200).json({
            message : 'Regancy successfully updated',
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async delete (req, res) {
        const {id} = req.params
         try{
          await Model.Regancy.destroy({where : {id : id}})
          return res.status(200).json({
            message : 'Regancy successfully delete',
          }) 
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async getAll (req, res) {
         try{
          const Regancy = await Model.Regancy.findAll()
          return res.status(200).json({
            data : Regancy,
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async getById (req, res) {
        const {id} = req.params
         try{
          const Regancy = await Model.Regancy.findOne({where : {id : id}})
          if(Province) return res.status(200).json({
            data : Regancy,
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }
}
module.exports = RegancyController