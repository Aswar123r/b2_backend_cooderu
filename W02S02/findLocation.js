const {regencies, provinces} = require('./location')

class Province {
    regencies = []

    constructor(id, name, alt_name, lat, long){
        this.id = id
        this.name = name 
        this.alt_name = alt_name
        this.lat = lat 
        this.long = long

        this.loadRegencies()
    }

    provinceName() {
        console.log(`Province Name : ${this.name}`)
    }

    loadRegencies() {
        for (let reg of regencies) {
            if (reg.province_id == this.id) {
                let newRegency = new Regency(
                    reg.id,
                    reg.name,
                    reg.alt_name,
                    reg.latitude,
                    reg.longitude,
                    this,
                )
                this.regencies.push(newRegency)
            }
        }
    }

    findRegenciesByName(name) {
        for(let reg of this.regencies) {
            if(reg.name == name) {
                return true
            }
        }
        return false
    }
}

class Regency {
    constructor(id, name, alt_name, lat, long, province){
        this.id = id
        this.name = name 
        this.alt_name = alt_name
        this.lat = lat 
        this.long = long
        this.province = province
    }   
}

class Location {
    provinceList = []

    constructor() {
        this.loadProvince()
    }

    loadProvince() {
        for (let province of provinces) {
            let newProvince = new Province(
                province.id,
                province.name,
                province.alt_name,
                province.latitude,
                province.longitude
            )   
            this.provinceList.push(newProvince)
        }
    }

    findRegenciesByProvinceName(str) {
        for(let province of this.provinceList) {
            if(province.name == str) {
                let myRegencies = province.regencies
                for(let reg of myRegencies) {
                    console.log(reg.province.name)
                }
            }
        }
    }

    getProvinceByID(id) {
        // Print Province Name and List of 
        // Regencies based on Province ID
        // ACEH 
        // - Kab X
        // - Kab Y
        // cari province object berdasarkan id
         for(let province of this.provinceList) {
            if(province.id == id) {
                province.provinceName()
                let myRegencies = province.regencies
                for(let reg of myRegencies) {
                    console.log(reg.name)
                }
            }
        }
    }

    findProvinceByRegencyID(id) {
        // input : ID Regency
        // output : Province Name 
        for(let province of this.provinceList) {
                let myRegencies = province.regencies
                for(let reg of myRegencies) {
                    if(reg.id == id) {
                        province.provinceName()
                        break
                    }
                }
            }
    }

    findProvinceByRegencyName(name) {
        // input : jakarta
        // output : DKI Jakarta
         for(let province of this.provinceList) {
                let myRegencies = province.regencies
                for(let reg of myRegencies) {
                    if(reg.name == name) {
                        province.provinceName()
                        break
                    }
                }
            }
        
    }

    findRegencyWithSizeWords(length) {
        // input : 3
        // output : list of Regency with length of words is equal 3
        // KABUPATEN ACEH SINGKIL
        // - KABUPATEN ACEH SELATAN
        // - KABUPATEN ACEH TENGGARA
        // - KABUPATEN ACEH TIMUR
        // - KABUPATEN ACEH TENGAH
        // - KABUPATEN ACEH BARAT
        // - KABUPATEN ACEH BESAR
        for(let province of this.provinceList) {
                let myRegencies = province.regencies
                for(let reg of myRegencies) {
                    let lengthWord = reg.name.split(" ").length
                    if(lengthWord == length) {
                        console.log(reg.name)
                    }
                }
            }
    }

}

let location = new Location()  

location.findRegenciesByProvinceName("DKI JAKARTA")
location.getProvinceByID(31)
location.findProvinceByRegencyID(3101)
location.findRegencyWithSizeWords(5)