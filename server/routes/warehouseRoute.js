import express from 'express'
import { getWarehouses,addWarehouse,editWarehouse,deleteWarehouse } from '../controllers/warehouseController.js'
const router=express.Router()
router.get('/',getWarehouses)
router.post('/add',addWarehouse)
router.put('/edit',editWarehouse)
router.delete('/delete',deleteWarehouse)


export default router