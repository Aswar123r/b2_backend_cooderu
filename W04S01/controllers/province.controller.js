const pool = require('../config/db')

class ProvinceController {
    static async create (req, res) {
        const {name, alt_name, latitude, longitude} = req.body
        await db
        .query(`insert into regancy (name, alt_name, latitude, longitude) values($1, $2, $3, $4')`,
        [name, alt_name, latitude, longitude])
        .then((result) => {
          res.status(200).json({
            message : 'Province successfully created',
          })  
        }).catch((err) => {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        });
    }

    static async update (req, res) {
        const {id} = req.params
        const {name, alt_name, latitude, longitude} = req.body
        await db
        .query(`update province set name = $1, alt_name = $2, latitude = $3, longitude = $4 where id = $5`,
        [name, alt_name, latitude, longitude, id])
        .then((result) => {
          res.status(200).json({
            message : 'Province successfully updated',
          })  
        }).catch((err) => {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        });
    }

    static async delete (req, res) {
        const {id} = req.params
        await db
        .query(`delete from province where id = $1`,
        [id])
        .then((result) => {
          res.status(200).json({
            message : 'Province successfully delete',
          })  
        }).catch((err) => {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        });
    }

    static async getAll (req, res) {
        await db
        .query(`select * from province order by id`)
        .then((result) => {
          res.status(200).json({
            data : result.rows,
          })  
        }).catch((err) => {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        });
    }

    static async getById (req, res) {
        const {id} = req.params
        await db
        .query(`select * from province where id = $1`,
        [id])
        .then((result) => {
          res.status(200).json({
            data : result.rows,
          })  
        }).catch((err) => {
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        });
    }
}
module.exports = ProvinceController