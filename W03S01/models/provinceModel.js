const { json } = require('express');
const fs = require('fs');
class ModelProvince {
    static Delete(id, provinceList) {
        let indexProvince
        for (let index = 0; index < provinceList.length; index++){
            if(regencyList[index].id == id) {
                indexRegency = index
                break
            }
        }
        provinceList.splice(indexProvince, 1)
        const Delete = fs.writeFileSync('./province.json', JSON.stringify(provinceList))
        return Delete
    }

    static Create(dataProvince) {
        let provinceList = fs.readFileSync('./province.jsonn', 'utf-8')
        provinceList = JSON.parse(provinceList)
        provinceList.push(dataProvince)
        const Created = fs.writeFileSync('./province.json', JSON.stringify(provinceList))
        return Created
    }
    static Update({name, alt_name, latitude, longitude}, provinceList, id) {
        for (let province of provinceList){
            if(province.id == id) {
                province.name = name
                province.alt_name = alt_name
                province.latitude = latitude
                province.longitude = longitude
                break
            }
        }
       return fs.writeFile('./province.json', JSON.stringify(provinceList))
    }
    static All(){
        const provinceList =  fs.readFileSync('./province.json', 'utf-8')
        return JSON.parse(provinceList)
    }
    static byId(id){
        const province =  fs.readFileSync('./province.json', 'utf-8')
            let provinceList = JSON.parse(province)
            for (let provinces of provinceList) {
                if(provinces.id == id) return provinces
            }
            return false
    }
}

module.exports = ModelProvince