const Model = require('../models/regencyModel')
const ModelProvince = require('../models/provinceModel')


class RegencyController {
    static Create (req, res) {
        const Regency = Model.Create(req.body)
        console.log(Regency)
        return res.status(200).send("Success Add To Regancy")
    }

    static Update (req, res) {
        const {id} = req.paramas
        const regencyList = Model.All()
        const updateRegency = Model.Update(req.body, regencyList, id)
        if(updateRegency) return res.status(201).send("Success Update To Regancy")
        return res.status(400).send("Internar Server Error")
    }

    static Delete (req, res) {
        const {id} = req.params
        const regencyList = Model.All()
        const deleteRegency = Model.Delete(id, regencyList)
        return res.status(200).send("Success Delete To Regancy")
    }
    static getAll (req, res) {
        const allRegency = Model.All()
        if(allRegency) return res.status(200).json(allRegency)
        return res.status(400).send("Internar Server Error")
    }
    static getById (req, res) {
        const {id}= req.params
        const Regency = Model.byId(id)
        if(Regency) return res.status(200).json(Regency)
        return res.status(400).send("Internar Server Error")
    }

    static findRegenciesByProvinceName(req, res) {
        const Province = ModelProvince.byName(req.body.name)
        const Regancy = Model.byProvinceId(Province.id)
        if(Regancy) return res.status(200).json(Regancy)
        return res.status(400).send("NOT_FOUND")
    }

    static findRegencyWithSizeWords (req, res) {
        const allRegency = Model.All()
        let regencyWithSizeWords = []
        if(allRegency){
            for (let Regency of allRegency){
                let withSize = Regancy.name.split(' ')
                if(withSize.length >= req.paramas.size){
                    regencyWithSizeWords.pop(Regency)
                }
            }
            return res.status(200).json(regencyWithSizeWords)
        }

        return res.status(400).send("Internar Server Error")
    }
}

module.exports = RegencyController