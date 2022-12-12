const Model = require('../models')

class ProvinceController {
    static async create (req, res) {
        const {name, alt_name, latitude, longitude} = req.body
        try{
          const createProvince = await Model.Province.create({name : name, alt_name : alt_name, latitude : latitude, longitude : longitude})
          if(createProvince) return res.status(200).json({
            message : 'Province successfully created',
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
          const updateProvince = await Model.Province.update({name : name, alt_name : alt_name, latitude : latitude, longitude : longitude}, {where : {id : id}})
          if(updateProvince) return res.status(200).json({
            message : 'Province successfully updated',
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
          await Model.Province.destroy({where : {id : id}})
          return res.status(200).json({
            message : 'Province successfully delete',
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
          const Province = await Model.Province.findAll({
            include : [
              {
                model : Model.Regancy
              }
            ]
          })
          return res.status(200).json({
            data : Province,
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
          const Province = await Model.Province.findOne({where : {id : id}})
          if(Province) return res.status(200).json({
            data : Province,
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }
}
module.exports = ProvinceController