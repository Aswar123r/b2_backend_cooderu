const { json } = require('express');
const fs = require('fs');
class ModelRegancy {
    static Delete(id, regencyList) {
        let indexRegency
        for (let index = 0; index < regencyList.length; index++){
            if(regencyList[index].id == id) {
                indexRegency = index
                break
            }
        }
        regencyList.splice(indexRegency, 1)
        const Delete = fs.writeFileSync('./regency.json', JSON.stringify(regencyList))
        return Delete
    }

    static Create(dataRegency) {
        let regancyList = fs.readFileSync('./regency.json', 'utf-8')
        regancyList = JSON.parse(regancyList)
        regancyList.push(dataRegency)
        const Created = fs.writeFileSync('./regency.json', JSON.stringify(regancyList))
        return Created
    }
    static Update({name, alt_name, latitude, longitude}, regencyList, id) {
        for (let regencie of regencyList){
            if(regencie.id == id) {
                regencie.name = name
                regencie.alt_name = alt_name
                regencie.latitude = latitude
                regencie.longitude = longitude
                break
            }
        }
       return fs.writeFile('./regency.json', JSON.stringify(regencyList))
    }
    static All(){
        const regancyList =  fs.readFileSync('./regency.json', 'utf-8')
        return JSON.parse(regancyList)
    }
    static byId(id){
        const regancy =  fs.readFileSync('./regency.json', 'utf-8')
            let regancyList = JSON.parse(regancy)
            for (let regencie of regancyList) {
                if(regencie.id == id) return regencie
            }
            return false
    }
}

module.exports = ModelRegancy