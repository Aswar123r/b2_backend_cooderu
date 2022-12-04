function segitiga (n) {
    for (let i=0; i < n; i++) {
        let data = ""
        for (let j = 0; j <= i ; j++) {
            if(j % 3 == 0) data += "*"
            else if ((j-1) % 3 == 0) data += "#"
            else data += "%"
        }
        console.log(data)
    }
}

segitiga(6)


let data = [
    {
        "S" : "row3",
        "A" : "row5"
    },
    {
        "S" : "row1",
        "A" : "row2"
    },
    {
        "S" : "row4",
        "A" : ""
    },
    {
        "S" : "",
        "A" : "row6"
    },
    {
        "S" : "row7",
        "A" : "row8"
    }]

function arrayAssociative (data) {
        let dataArray = []
        for (let i = 0; i < data.length; i++) {
            let Array = [data[i].S, data[i].A]
            dataArray.push(Array)
        }
        return dataArray
    }

function ekstrakSubdomain (data) {
    for(let i = 0; i < data.length; i++) {
        let arrayDomain = data[i].split(".")
        if(arrayDomain.length > 2 ) {
            let arraySubDoamin = arrayDomain[0].split("//")
            console.log(arraySubDoamin[1])
        } else {
            console.log("tidak punya sub domain")
        }
    }

}
let domain = [
    'https://id.bitdegree.org',
    'https://finance.detik.com',
    'https://telkom.co.id',
    'https://corona.jakarta.go.id'
]

ekstrakSubdomain(domain)

function palindrome (data) {
    let dataBaru
    let dataBaru2
     for(let i = 0; i < data.length; i++) {
        if(data[i]!== " ") dataBaru2 += data[i]
    }
    dataBaru2 = dataBaru2.split("undefined")
    dataBaru2 = dataBaru2[1]
    for(let i = dataBaru2.length; i >= 0; i--) {
        dataBaru += dataBaru2[i]
    }
    dataBaru = dataBaru.split("NaN")
    dataBaru = dataBaru[1]
    if(dataBaru2 == dataBaru) console.log("palindrome")
}

palindrome("7 323 7")