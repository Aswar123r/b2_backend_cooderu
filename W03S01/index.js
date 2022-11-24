
const express = require('express')
const app = express()
const fs = require('fs');
const { provinces, regencies } = require('../W02S02/location');

app.use(express.json())

// sample 
// localhost:3000?id=1&name=Aceh
app.get('/', (req, res) => {
    let data = req.query
    console.log("hello world")
    
    res.status(200).send(`Your Quey Data is ${data}`)
});

app.get('/province', (req, res) => {
    fs.readFile('./W02S02/location.jsn', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let dataJson = JSON.parse(data)
        res.status(200).send(dataJson)
    });
})

// get by params
// localhost:3000/province/1
app.get('/province/:id', (req, res) => {
    
});

//API CRUD porivince
//add
app.post('/privince',(req, res) => {
    fs.readFile('./province.json', 'utf-8', (err, data) => {
        let provinceList = JSON.parse(data)
        provinceList.push(req.body)
        fs.fstatSync.writeFile('./province.json', JSON.stringify(provinceList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to Add Province")
        })
    })
})
// update 
app.put('/privince/:id',(req, res) => {
    let idProvince = req.params.id
    const {name, alt_name, latitude, longitude} = req.bdy
    fs.readFile('./province.json', 'utf-8', (err, data) => {
        let provinceList = JSON.parse(data)
        for (province of provinceList){
            if(province.id == idProvince) {
                provinces.name = name
                province.alt_name = alt_name
                province.latitude = latitude
                province.longitude = longitude
                break
            }
        }
        fs.fstatSync.writeFile('./province.json', JSON.stringify(provinceList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to update")
        })
    })
})
//delete
app.put('/privince/:id',(req, res) => {
    let idProvince = req.params.id
    fs.readFile('./province.json', 'utf-8', (err, data) => {
        let provinceList = JSON.parse(data)
        let indexProvince
        for (let index = 0; index < provinceList.length; index++){
            if(provinceList[index].id == idProvince) {
                indexProvince = index
                break
            }
        }
        provinceList.splice(indexProvince, 1)
        fs.fstatSync.writeFile('./province.json', JSON.stringify(provinceList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to delete Province.")

        })
    })
})
//get all
app.put('/privince/:id',(req, res) => {
    fs.readFile('./province.json', 'utf-8', (err, data) => {
       res.status(200).send(data)
    })
})

// API CRUD Regancy
//add
app.post('/regancy',(req, res) => {
    fs.readFile('./regency.json', 'utf-8', (err, data) => {
        let regancyList = JSON.parse(data)
        regancyList.push(req.body)
        fs.fstatSync.writeFile('./regency.json', JSON.stringify(regancyList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to Add Province")
        })
    })
})
// update 
app.put('/regency/:id',(req, res) => {
    let idRegency = req.params.id
    const {name, alt_name, latitude, longitude} = req.bdy
    fs.readFile('./province.json', 'utf-8', (err, data) => {
        let regencyList = JSON.parse(data)
        for (let regencie of regencyList){
            if(regencie.id == idRegency) {
                regencie.name = name
                regencie.alt_name = alt_name
                regencie.latitude = latitude
                regencie.longitude = longitude
                break
            }
        }
        fs.fstatSync.writeFile('./regency.json', JSON.stringify(regencyList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to update")
        })
    })
})
//delete
app.put('/regency/:id',(req, res) => {
    let idRegency = req.params.id
    fs.readFile('./regency.json', 'utf-8', (err, data) => {
        let regencyList = JSON.parse(data)
        let indexRegency
        for (let index = 0; index < regencyList.length; index++){
            if(regencyList[index].id == idRegency) {
                indexRegency = index
                break
            }
        }
       regencyList.splice(indexRegency, 1)
        fs.fstatSync.writeFile('./province.json', JSON.stringify(provinceList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to delete Province")
        })
    })
})
//get all
app.put('/regency/:id',(req, res) => {
    fs.readFile('./regency.json', 'utf-8', (err, data) => {
       res.status(200).send(data)
    })
})
app.post('/province', (req, res) => {
    let newData = req.body

    fs.readFile('./W02S02/location.js', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }

        let provinceList = JSON.parse(data)
        provinceList.push(newData)

        fs.writeFile('./W02S02/location.js', JSON.stringify(provinceList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to Add Province")
        });    
    });

});

app.put('/', (req, res) => {
    console.log("Hello World");
    res.send('Hello World Put')
});

app.delete('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello World Delete")
});

// Get API Regency by Province ID
app.get('/RegencyByProvinceId/:id', (req, res) => {
   fs.readFile('./regency.json', 'utf-8', (err, data) => {
         if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let newData = JSON.parse(data)
        let regencieByIdPrivince = []
        for (let regencie of newData) {
            if(regencie.province_id == req.params.id)
            regencieByIdPrivince.push(regencie)
        }
        return res.status(400).json(regencieByIdPrivince)

   })
})

//Get API Regency By Province Name
app.get('/RegencyByProvinceName', (req, res) => {
   fs.readFile('./regency.json', 'utf-8', (err, dataRegencie) => {
         if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let province_id 
        fs.readFile('./province.json', 'utf-8', (err, data) => {
            dataProvince = JSON.parse(data)
            for (let province of dataProvince) {
            if(province.name == req.body.name){
                province_id = province.id
                break
            }
        }
         let regencieByIdPrivince = []
        let newData = JSON.parse(dataRegencie)
        for (let regencie of newData) {
            if(regencie.province_id == province_id)
            regencieByIdPrivince.push(regencie)
        }
        return res.status(200).json(regencieByIdPrivince)
        })

   })
})

// Get API Province Name by Regency Name
app.get('/ProvinceNameByRegencyName/', (req, res) => {
   fs.readFile('./regency.json', 'utf-8', (err, dataRegencie) => {
         if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let province_id
        const newData = JSON.parse(dataRegencie)
        for (let regencie of newData) {
            if(regencie.name == req.body.name)
            province_id = regencie.province_id
        }
        fs.readFile('./province.json', 'utf-8', (err, data) => {
            let dataProvince = JSON.parse(data)
            for (let province of dataProvince) {
            if(province.id == province_id){
                return res.status(200).send(province.name)
            }
        }
        })
   })
})

console.log("App running on port 3000")
app.listen(3000);

// http status
// 200 success
// 4xx Bad Request, kesalahan user/ client
// 5xx Server Error, terkait kesalahan dalam server

// Assignment
// CRUD API Province
// CRUD API Regency
// Get API Regency by Province ID
// Get API Regency By Province Name
// Get API Province Name by Regency Name