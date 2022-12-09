const pool = require('../config/db')

class RegancyController {
    static async create (req, res) {
        const {province_id, name, alt_name, latitude, longitude} = req.body
        await db
        .query(`insert into regancy (province_id, name, alt_name, latitude, longitude) values($1, $2, $3, $4, $5')`,
        [province_id, name, alt_name, latitude, longitude])
        .then((result) => {
          res.status(200).json({
            message : 'Regancy successfully created',
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
        .query(`update regancy set name = $1, alt_name = $2, latitude = $3, longitude = $4 where id = $5`,
        [name, alt_name, latitude, longitude, id])
        .then((result) => {
          res.status(200).json({
            message : 'Regancy successfully updated',
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
        .query(`delete from regancy where id = $1`,
        [id])
        .then((result) => {
          res.status(200).json({
            message : 'Regancy successfully delete',
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
        .query(`select * from regancy order by id`)
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
        .query(`select * from regancy where id = $1`,
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
module.exports = RegancyController 