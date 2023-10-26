import{Router}from 'express'
import { getEmployees ,createEmployees,updateEmployees,deleteEmployees,getEmployee} from '../controllers/employees.controller.js'
const router =Router()
router.get('/employees',getEmployees)
router.get('/employees/:id',getEmployee)
router.post('/employees',createEmployees)
// para actualizar los datos que deseas
router.patch('/employees/:id',updateEmployees)
router.delete('/employees/:id',deleteEmployees)
export default router