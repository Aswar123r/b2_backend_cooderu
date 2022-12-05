const Model = require('../models/provinceModel')
const ModelRegancy = require('../models/regencyModel')


class ProvinceController {
    static Create (req, res) {
        const Province = Model.Create(req.body)
        return res.status(200).send("Success Add To Province")
    }

    static Update (req, res) {
        const {id} = req.paramas
        const provinceList = Model.All()
        const updateProvince = Model.Update(req.body, provinceList, id)
        if(updateProvince) return res.status(201).send("Success Update To Province")
        return res.status(400).send("Internar Server Error")
    }

    static Delete (req, res) {
        const {id} = req.params
        const provinceList = Model.All()
        const deleteProvince = Model.Delete(id, provinceList)
        return res.status(200).send("Success Delete To Province")
    }
    static getAll (req, res) {
        const allProvince= Model.All()
        if(allRegency) return res.status(200).json(allProvince)
        return res.status(400).send("Internar Server Error")
    }
    static getById (req, res) {
        const {id}= req.params
        const Province = Model.byId(id)
        if(Province) return res.status(200).json(Province)
        return res.status(400).send("Internar Server Error")

    }

    static findProvinceByRegencyId (req, res) {
        const Regancy = ModelRegancy.byId(req.paramas.id)
        const Province = Model.byId(Regancy.province_id)
        if(Province) return res.status(200).json(Province)
        return res.status(400).send("Internar Server Error")
    }
}

module.exports = ProvinceController