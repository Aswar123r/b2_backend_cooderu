const {regencies, provinces} = require('./location');

class Provinces {
    constructor(id, name, alt_name, latitude, longitude){
        this.id = id
        this.name = name
        this.alt_name = alt_name
        this.latitude = latitude
        this.longitude = longitude
    }
    getProvinceById(id){
        for(let province of provinces) {
            if(province.id == id) console.log(`-> ${province.name}`)
        }
        for(let regencie of regencies) {
            if(regencie.province_id == id) console.log(`--> ${regencie.name}`)
        }
    }

    findProvinceByRegencyID(id) {
        console.log('findProvinceByRegencyID')
        for(let regencie of regencies) {
            if(regencie.id == id){
            for(let province of provinces) {
            if(province.id == regencie.province_id) console.log(`-> ${province.name}`)
            }
        }
        }
    }

    findProvinceByRegencyName(name){
        console.log('findProvinceByRegencyName')
        for(let regencie of regencies) {
            if(regencie.name == name){
            for(let province of provinces) {
            if(province.id == regencie.province_id) console.log(`-> ${province.name}`)
            }
        }
        }
    }

    findRegencyByProvinceName(name) {
        let id
        for(let province of provinces) {
            if (province.name == name ) {
                id = province.id
                break
            }
        }
        for(let regencie of regencies) {
            if (regencie.province_id == id) {
                console.log(`-> ${regencie.name}`)
            }
        }
    }

    findRegencyWithSizeWord(length) {
        let lengthWord
        for(let regencie of regencies) {
            lengthWord = regencie.name.split(" ")
            if(lengthWord.length == length) console.log(`-> ${regencie.name}`)
        }
    }
}
let aswar = new Provinces()
aswar.findRegencyByProvinceName('SUMATERA UTARA')