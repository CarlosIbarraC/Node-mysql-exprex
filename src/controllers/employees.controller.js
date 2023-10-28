import {
    pool
} from '../db.js'
export const getEmployees = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM employe')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}


export const getEmployee = async (req, res) => {
    try {
        
        const [rows] = await pool.query('SELECT * FROM employe WHERE id=?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            mensage: 'Employee not found'
        })

        res.send(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }


}


export const createEmployees = async (req, res) => {

    try {
        const {
            name,
            salary
        } = req.body
        const [rows] = await pool.query('INSERT INTO employe (name,salary) VALUES(?,?)', [name, salary])
        console.log(req.body);
        res.send({
            id: rows.insertId,
            name,
            salary,
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }

}



export const updateEmployees = async (req, res) => {

    try {
        const {
            id
        } = req.params
        const {
            name,
            salary
        } = req.body
        const [result] = await pool.query('UPDATE employe SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?', [name, salary, id])
        if (result.affectedRows === 0) {
            return res.status(404).json({
                menssage: 'Employee not found'
            })
        }
        const [rows] = await pool.query('SELECT * FROM employe WHERE id=?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }



}

export const deleteEmployees = async (req, res) => {

    try {
        const [result] = await pool.query('DELETE FROM employe WHERE id=?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            mensage: 'Employee not found not delete'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }

}
